import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: transparent;
  * {
    box-sizing: border-box;
  }
  .primary-btn span {
    font-family: 'Montserrat', sans-serif;
    color: #e6b670;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-decoration: none;
    width: 100%;
    padding: 10px 15px;
    text-align: center;
  }
  .primary-btn {
    width: 350px;
    height: 76px;
    position: relative;
  }

  @media only screen and (max-width: 319px) {
    .primary-btn span {
      font-size: 16px;
    }
  }
`;

const Button = ({ label }) => {
  return (
    <Container>
      <a href className='primary-btn'>
        <svg width='100%' height='76' viewBox='0 0 279 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M195.347 14.3029L190.381 19.2689L185.415 14.3029H156.901L144.795 2.19693L141.843 5.14906L139.943 3.24963L143.193 0H135.824L139.074 3.24963L137.174 5.14906L134.222 2.19693L122.116 14.3029H93.6018L88.6358 19.2689L83.6698 14.3029V14.2801H25.085V14.8979H83.3952L84.2648 15.7676H38.5641V16.3855H84.9056L85.7752 17.2551H40.6924V17.873H86.3702L88.6358 20.1385L90.9014 17.873H125.32L131.888 11.305L136.556 15.9735L138.067 14.4631L139.074 15.4701L137.357 17.1864H141.66L139.943 15.4701L140.95 14.4631L142.461 15.9735L147.129 11.305L153.697 17.8501H188.116L190.381 20.1157L192.647 17.8501H238.325V17.2322H193.265L194.134 16.3626H240.476V15.7447H194.729L195.599 14.8751H253.932V14.2572H195.347V14.3029ZM144.795 3.0429L156.649 14.8972L156.672 14.8743V14.8972H185.186L186.056 15.7668H155.436L147.106 7.43677L140.95 13.5928L139.943 12.5858L144.612 7.91735L142.277 5.58311L144.795 3.0429ZM137.975 9.01602L139.531 10.5722L141.088 9.01602L139.966 7.89467L141.866 5.99524L143.765 7.89467L139.508 12.1512L135.275 7.91755L137.174 6.01812L139.074 7.91755L137.975 9.01602ZM139.508 8.33005L140.195 9.01659L139.508 9.70313L138.822 9.01659L139.508 8.33005ZM137.312 0.595172H141.728L139.509 2.81499L137.312 0.595172ZM139.508 3.6616L141.408 5.56103L139.508 7.46046L137.609 5.56103L139.508 3.6616ZM93.8535 14.8972H122.345V14.8743L122.368 14.8972L134.222 3.0429L136.739 5.56022L134.405 7.89446L139.097 12.5858L138.09 13.5928L131.934 7.43677L123.604 15.7668H92.961L93.8535 14.8972ZM136.556 15.1045L131.888 10.436L125.068 17.2556H91.4965L92.3661 16.386H123.833L131.911 8.3077L137.632 14.0289L136.556 15.1045ZM140.195 16.5686H138.845L139.508 15.905L140.195 16.5686ZM139.508 15.0359L138.502 14.029L139.508 13.022L140.515 14.029L139.508 15.0359ZM153.972 17.2556L147.152 10.436L142.461 15.1045L141.385 14.0289L147.106 8.3077L155.185 16.386V16.4089H186.651L187.521 17.2785H153.972V17.2556Z'
            fill='#E6B670'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M194.729 60.2095H240.453V59.5917H194.134L193.265 58.722H238.325V58.127H192.647L190.381 55.8615L188.116 58.127H153.697L147.129 64.695L142.461 60.0265L140.95 61.5369L139.943 60.5299L141.66 58.8136H137.357L139.074 60.5299L138.067 61.5369L136.556 60.0265L131.888 64.695L125.32 58.127H90.8785L88.6129 55.8615L86.3473 58.127H40.6924V58.7449H85.7523L84.8827 59.6145H38.5641V60.2324H84.2877L83.4181 61.1021H25.085V61.7199H83.6698V61.6971L88.6358 56.7311L93.6018 61.6971H122.116L134.222 73.8031L137.174 70.8509L139.074 72.7504L135.824 76H143.193L139.943 72.7504L141.843 70.8509L144.795 73.8031L156.901 61.6971H185.415L190.381 56.7311L195.347 61.6971V61.7199H253.932V61.1021H195.622L194.729 60.2095ZM142.461 60.8732L147.129 65.5417L153.949 58.722H187.498L186.628 59.5917H155.185V59.6145L147.106 67.6928L141.385 61.9717L142.461 60.8732ZM138.845 59.4078H140.195L139.531 60.0714L138.845 59.4078ZM139.508 60.9428L140.515 61.9497L139.508 62.9566L138.502 61.9497L139.508 60.9428ZM141.065 66.9604L139.508 65.4042L137.952 66.9604L139.074 68.0817L137.174 69.9811L135.275 68.0817L139.508 63.848L143.742 68.0817L141.843 69.9811L139.943 68.0817L141.065 66.9604ZM139.508 67.6477L138.822 66.9612L139.508 66.2746L140.195 66.9612L139.508 67.6477ZM125.068 58.722L131.888 65.5417L136.556 60.8732L137.632 61.9488L131.911 67.67L123.833 59.5917H92.3661L91.4965 58.7221L125.068 58.722ZM134.222 72.9339L122.368 61.0796L122.345 61.1025V61.0796H93.8536L92.984 60.21H123.604L131.934 68.54L138.09 62.384L139.097 63.3909L134.428 68.0594L136.762 70.3937L134.222 72.9339ZM141.728 75.3812H137.312L139.531 73.1614L141.728 75.3812ZM139.508 72.3154L137.609 70.4159L139.508 68.5165L141.408 70.4159L139.508 72.3154ZM185.164 61.0796H156.672V61.1025L156.649 61.0796L144.795 72.9339L142.278 70.4165L144.612 68.0823L139.943 63.3909L140.95 62.384L147.106 68.54L155.436 60.21H186.033L185.164 61.0796Z'
            fill='#E6B670'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M278.437 37.9851L261.429 54.9953L258.31 51.8764L254.156 56.0304V61.7097H253.554V55.7809L271.358 37.9748L272.199 37.9851L260.437 49.7494L263.13 52.4425L277.596 37.9747L278.437 37.9851ZM260.012 50.1753L258.736 51.4505L261.429 54.1436L262.705 52.8683L260.012 50.1753Z'
            fill='#E6B670'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M278.437 37.9851L261.436 20.9609L258.317 24.0798L254.163 19.9258V14.2465H253.561V20.1752L271.358 37.9748L272.199 37.9851L260.444 26.2068L263.137 23.5137L277.596 37.9747L278.437 37.9851ZM260.018 25.7809L258.743 24.5056L261.436 21.8126L262.711 23.0878L260.018 25.7809Z'
            fill='#E6B670'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.503296 37.9851L17.511 54.9953L20.6299 51.8764L24.7839 56.0304V61.7097H25.3861V55.7809L7.16696 37.5593L6.74108 37.9851L18.5029 49.7494L15.8099 52.4425L0.929169 37.5593L0.503296 37.9851ZM18.9287 50.1753L20.204 51.4505L17.511 54.1436L16.2357 52.8683L18.9287 50.1753Z'
            fill='#E6B670'
          ></path>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.929169 37.5593L17.5042 20.9609L20.6231 24.0798L24.7771 19.9258V14.2465H25.3793V20.1752L7.58229 37.9747L7.16696 37.5593L18.4962 26.2068L15.8031 23.5137L1.34449 37.9747L0.929169 37.5593ZM18.922 25.7809L20.1973 24.5056L17.5042 21.8126L16.2289 23.0878L18.922 25.7809Z'
            fill='#E6B670'
          ></path>
        </svg>
        <span>{label}</span>
      </a>
    </Container>
  );
};

export default Button;
