import React from 'react';
import styled, { css } from 'styled-components';
import { animated, useTransition, useSpring } from 'react-spring';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { isMobile } from 'react-device-detect';
import { useGesture } from 'react-use-gesture';

const AnimatedDialogOverlay = animated(DialogOverlay);
const StyledDialogOverlay = styled(AnimatedDialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: 2;
    background-color: transparent;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const AnimatedDialogContent = animated(DialogContent);
// destructure to not pass custom props to Dialog DOM element
const StyledDialogContent = styled(({ minHeight, maxHeight, mobile, isOpen, ...rest }) => <AnimatedDialogContent {...rest} />).attrs({
  'aria-label': 'dialog'
})`
  overflow-y: ${(props) => (props.mobile ? 'scroll' : 'hidden')};

  &[data-reach-dialog-content] {
    margin: 0 0 2rem 0;
    background-color: #000000;
    padding: 0px;
    width: 50vw;
    overflow-y: ${(props) => (props.mobile ? 'scroll' : 'hidden')};
    overflow-x: hidden;

    align-self: ${(props) => (props.mobile ? 'flex-end' : 'center')};

    max-width: 420px;
    ${(props) =>
      props.maxHeight &&
      css`
        max-height: ${props.maxHeight}vh;
      `}
    ${(props) =>
      props.minHeight &&
      css`
        min-height: ${props.minHeight}vh;
      `}
    display: flex;
    border-radius: 4px;
    border: 1px solid #ffd58ccc;
  }
`;

export default function Modal({ isOpen, onDismiss, minHeight = false, maxHeight = 90, initialFocusRef, children }) {
  const fadeTransition = useTransition(isOpen, null, {
    config: { duration: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const [{ y }, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 210, friction: 20 } }));
  const bind = useGesture({
    onDrag: (state) => {
      set({
        y: state.down ? state.movement[1] : 0
      });
      if (state.movement[1] > 300 || (state.velocity > 3 && state.direction[1] > 0)) {
        onDismiss();
      }
    }
  });

  return (
    <>
      {fadeTransition.map(
        ({ item, key, props }) =>
          item && (
            <StyledDialogOverlay
              key={key}
              style={props}
              onDismiss={onDismiss}
              initialFocusRef={initialFocusRef}
              unstable_lockFocusAcrossFrames={false}
            >
              <StyledDialogContent
                {...(isMobile
                  ? {
                      ...bind(),
                      style: { transform: y.interpolate((y) => `translateY(${y > 0 ? y : 0}px)`) }
                    }
                  : {})}
                aria-label='dialog content'
                minHeight={minHeight}
                maxHeight={maxHeight}
                mobile={isMobile}
              >
                {/* prevents the automatic focusing of inputs on mobile by the reach dialog */}
                {!initialFocusRef && isMobile ? <div tabIndex={1} /> : null}
                {children}
              </StyledDialogContent>
            </StyledDialogOverlay>
          )
      )}
    </>
  );
}
