import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { useActiveWeb3React } from '../../../hooks/useWeb3';
import Jazzicon from '@metamask/jazzicon';

const StyledIdenticonContainer = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: #565a69;
`;

export default function Identicon() {
  const ref = useRef();
  const { account } = useActiveWeb3React();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return <StyledIdenticonContainer ref={ref} />;
}
