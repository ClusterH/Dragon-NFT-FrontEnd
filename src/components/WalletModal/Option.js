import React, { useCallback } from 'react';
import styled from 'styled-components/macro';

const InfoCard = styled.button`
  background-color: ${(props) => (props.active ? '#40444f50' : '#0f0f0f')};
  padding: 16px;
  outline: none;
  border: 1px solid;
  border-radius: 12px;
  width: 100% !important;
  &:focus {
    box-shadow: 0 0 0 1px #ffffff;
  }
`;

const OptionCard = styled(InfoCard)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 16px;
`;

const OptionCardLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100%;
`;

const OptionCardClickable = styled(OptionCard)`
  margin-top: 0;
  &:hover {
    cursor: ${(props) => (props.clickable ? 'pointer' : '')};
    border: ${(props) => (props.clickable ? `1px solid #ffd58c` : ``)};
  }
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

const GreenCircle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &:first-child {
    height: 8px;
    width: 8px;
    margin-right: 8px;
    background-color: #27ae60;
    border-radius: 50%;
  }
`;

const CircleWrapper = styled.div`
  color: #27ae60;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  color: ${(props) => (props.color === 'blue' ? '#ffd58c' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
`;

const SubHeader = styled.div`
  color: '#FFFFFF';
  margin-top: 10px;
  font-size: 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  & > img,
  span {
    height: ${(props) => (props.size ? props.size + 'px' : '24px')};
    width: ${(props) => (props.size ? props.size + 'px' : '24px')};
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`;

export function ExternalLink({ target = '_blank', href, rel = 'noopener noreferrer', ...rest }) {
  const handleClick = useCallback(
    (event) => {
      // don't prevent default, don't redirect if it's a new tab
      if (target === '_blank' || event.ctrlKey || event.metaKey) {
        ReactGA.outboundLink({ label: href }, () => {
          console.debug('Fired outbound link event', href);
        });
      } else {
        event.preventDefault();
        // send a ReactGA event and then trigger a location change
        ReactGA.outboundLink({ label: href }, () => {
          window.location.href = href;
        });
      }
    },
    [href, target]
  );
  return <StyledLink target={target} rel={rel} href={href} onClick={handleClick} {...rest} />;
}

export default Option = ({ link = null, clickable = true, size, onClick = null, color, header, subheader = null, icon, active = false, id }) => {
  const content = (
    <OptionCardClickable id={id} onClick={onClick} clickable={clickable && !active} active={active}>
      <OptionCardLeft>
        <HeaderText color={color}>
          {active ? (
            <CircleWrapper>
              <GreenCircle>
                <div />
              </GreenCircle>
            </CircleWrapper>
          ) : (
            ''
          )}
          {header}
        </HeaderText>
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </OptionCardLeft>
      <IconWrapper size={size}>
        <img src={icon} alt={'Icon'} />
      </IconWrapper>
    </OptionCardClickable>
  );
  if (link) {
    return <ExternalLink href={link}>{content}</ExternalLink>;
  }

  return content;
};
