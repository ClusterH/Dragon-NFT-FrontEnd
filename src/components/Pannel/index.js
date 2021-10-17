import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .pround {
    padding: 20px;
  }

  * {
    box-sizing: border-box;
  }
  /* instructions box CSS start */
  .instructions-box {
    width: 407px;
    height: auto;
    position: relative;
    padding: 24px;
  }
  .instructions-box .bootom--center-strip,
  .instructions-box .top-strip {
    position: absolute;
    left: 50%;
    top: -13px;
    transform: translateX(-50%);
  }
  .instructions-box .bootom--center-strip {
    top: auto;
    bottom: -13px;
  }
  .instructions-box .bootom--left-strip {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .instructions-box .bootom--right-strip {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .instructions-box .inner-box {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 5.68%, #100d0d 45.54%);
    padding: 42px 22px 61px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 767px) {
    .instructions-box .bootom--left-strip {
      display: none;
    }
    .instructions-box .bootom--right-strip {
      display: none;
    }
    .instructions-box .bootom--center-strip {
      display: none;
    }
    .instructions-box {
      padding: 0px;
      width: 100%;
      margin: 0 -16px 0 -16px;
      width: calc(100% + 34px);
    }
    .instructions-box .inner-box {
      padding: 16px;
      background: #1e1e1e;
      box-shadow: 0px -4px 25px rgba(0, 0, 0, 0.5);
    }
    .instructions-box .bootom--center-strip,
    .instructions-box .top-strip {
      top: -34px;
    }
  }
  @media only screen and (max-width: 319px) {
    .instructions-box .top-strip svg {
      width: 215px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .instructions-box {
      width: 365px;
    }

    .instructions-box .top-strip {
      top: -50px;
    }
  }
`;

const Pannel = ({ children }) => {
  return (
    <Container>
      <div className='instructions-box'>
        <div className='top-strip'>
          <svg width='283' height='48' viewBox='0 0 283 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M127.86 39.6692L129.044 40.1395V35.1048V35.1048V35.1048L132.934 35.1048V35.1048V42.6016L134.118 43.0718V39.5586L141.869 47.166L149.395 39.7799V43.0718L150.579 42.6016V35.1048V35.1048H154.468V35.1048V35.1048V40.1395L155.652 39.6692V35.1048L282.688 35.1048V33.9429L174.734 33.9429L178.68 30.07L259.096 30.07V28.9082L167.406 28.9082L174.311 22.1306L182.795 22.1306V20.9688L173.86 20.9688V20.9688V20.9688H155.68V20.0282V18.3961V13.223L154.496 10.429V18.894V20.9964V20.9964V21.1624L150.607 24.98V15.0211L149.423 12.2271V26.1418L146.604 28.9082H145.082V5.14532H149.113L147.929 3.98346H145.082V1.18945L143.898 0.0275879V3.98345H141.756H139.614V0.0275879L138.43 1.18945V3.98346L135.583 3.98346L134.4 5.14532L138.43 5.14532V28.9082H137.275L134.09 25.7822V12.2272L132.906 15.0212V24.6204L129.016 20.8028V18.8664V10.4014L127.832 13.1954V18.3684V20.0006V20.9411L109.652 20.9411V20.9411V20.9411H100.717V22.103H109.201L116.107 28.9082L24.4169 28.9082V30.07L104.804 30.07L108.75 33.9429L0.796844 33.9429V35.1048L127.86 35.1048V39.6692V39.6692ZM122.449 33.9409H121.011V33.9409H113.232L109.286 30.068L127.889 30.068V33.9409H125.267H122.449V33.9409ZM129.044 33.9409V30.8703L132.173 33.9409L129.044 33.9409V33.9409V33.9409ZM134.118 30.0404H136.795L140.77 33.9409H134.118V30.0404V30.0404ZM132.934 33.0557L129.861 30.0404H132.934V33.0557V33.0557ZM149.395 38.1456L141.869 45.5317L134.118 37.9243V35.1026H141.756V34.909V34.909V35.1026H149.395V38.1456V38.1456ZM161.064 33.9424H158.273H155.652V30.0695H174.255L170.309 33.9424H162.529V33.9424H161.064V33.9424ZM154.469 30.8703V33.9409V33.9409H151.34L154.469 30.8703V30.8703ZM150.579 33.0552V30.0399L153.651 30.0399L150.579 33.0552V33.0552ZM149.395 33.9409H143.109L147.083 30.0404H149.395V33.9409H149.395ZM173.071 33.9424H171.943L175.889 30.0695H177.017L173.071 33.9424V33.9424ZM172.649 22.1019L165.744 28.8794H157.598V28.8794H155.653V22.1019H172.649V22.1019ZM154.469 22.7925V28.8784L150.579 28.8784V26.61L154.469 22.7925V22.7925ZM149.395 27.7719V28.8784H148.267L149.395 27.7719V27.7719ZM139.614 30.0403V5.14322H141.756V5.14322V5.14322V5.14322V5.14322H143.898V30.0403H145.42L141.953 33.4429L138.486 30.0403H139.614V30.0403ZM135.611 28.8784H134.089V27.3846L135.611 28.8784V28.8784ZM132.935 28.8784H129.045V22.4328L132.935 26.2504V28.8784V28.8784ZM110.864 22.1009L127.86 22.1009V28.8784H125.915V28.8784L117.77 28.8784L110.864 22.1009V22.1009ZM106.467 30.07H107.594L111.54 33.9429H110.413L106.467 30.07V30.07Z'
              fill='#E6B670'
            />
          </svg>
        </div>
        <div className='bootom--center-strip'>
          <svg width='283' height='49' viewBox='0 0 283 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M155.443 8.38377L154.26 7.91348V12.9484V12.9484V12.9484H150.37V12.9484V5.45134L149.186 4.98105V8.49443L141.434 0.886719L133.907 8.27311V4.98105L132.723 5.45134V12.9484V12.9484H128.833V12.9484V12.9484V7.91348L127.649 8.38377V12.9484H0.603516V14.1103H108.566L104.619 17.9833H24.1974V19.1452H115.895L108.989 25.923H100.504V27.0849H109.44V27.0849V27.0849H127.621V28.0255V29.6577V34.8309L128.805 37.625V29.1597V27.0572V27.0572V26.8913L132.695 23.0736V33.0328L133.879 35.8269V21.9117L136.698 19.1452H138.22V42.9089H134.189L135.373 44.0708H138.22V46.8649L139.404 48.0269V44.0709H141.547H143.689V48.0269L144.873 46.8649V44.0708H147.72L148.904 42.9089H144.873V19.1452H146.028L149.214 22.2713V35.8268L150.398 33.0327V23.4332L154.288 27.2509V29.1874V37.6527L155.472 34.8586V29.6853V28.0531V27.1126H173.653V27.1126V27.1126H182.589V25.9506H174.104L167.198 19.1452H258.896V17.9833H178.502L174.555 14.1103H282.518V12.9484H155.443V8.38377V8.38377ZM160.856 14.1099H162.294V14.1099H170.074L174.02 17.9829H155.416V14.1099H158.038H160.856V14.1099ZM154.259 14.1099V17.1806L151.13 14.1099H154.259V14.1099V14.1099ZM149.187 18.0105H146.509L142.534 14.1099H149.187V18.0105V18.0105ZM150.37 14.9956L153.443 18.011H150.37V14.9956V14.9956ZM133.907 9.90544L141.434 2.51904L149.185 10.1268V12.9485H141.546V13.1422V13.1422V12.9485H133.907V9.90544V9.90544ZM122.237 14.1099H125.028H127.649V17.9829H109.045L112.991 14.1099H120.771V14.1099H122.237V14.1099ZM128.834 17.1806V14.1099V14.1099H131.963L128.834 17.1806V17.1806ZM132.724 14.9956V18.011H129.651L132.724 14.9956V14.9956ZM133.907 14.1099H140.193L136.219 18.0105H133.907V14.1099H133.907ZM110.229 14.1099H111.356L107.41 17.9829H106.282L110.229 14.1099V14.1099ZM110.65 25.9506L117.557 19.1729H125.703V19.1729H127.648V25.9506H110.65V25.9506ZM128.834 25.259V19.1729H132.724V21.4413L128.834 25.259V25.259ZM133.907 20.2794V19.1729H135.035L133.907 20.2794V20.2794ZM143.689 18.0111V42.9091H141.546V42.9091V42.9091V42.9091V42.9091H139.404V18.0111H137.882L141.349 14.6084L144.816 18.0111H143.689V18.0111ZM147.692 19.1729H149.215V20.6667L147.692 19.1729V19.1729ZM150.37 19.1729H154.26V25.6187L150.37 21.801V19.1729V19.1729ZM172.441 25.9506H155.443V19.1729H157.388V19.1729H165.535L172.441 25.9506V25.9506ZM176.839 17.9829H175.711L171.765 14.1099H172.892L176.839 17.9829V17.9829Z'
              fill='#E6B670'
            />
          </svg>
        </div>
        <div className='bootom--left-strip'>
          <svg width='167' height='163' viewBox='0 0 167 163' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.832 141.13H65.9915V115.794L64.6153 114.443V139.779H24.1916V100.124H49.9912L48.615 98.7729H22.7988L22.832 141.13Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.3877 148.436V124.19H40.0929V148.436H15.3877V148.436ZM16.7471 125.541V147.102H38.7165V125.541H16.7471V125.541Z'
              fill='#E6B670'
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M0.796875 109.415V108.064H56.5246V162.756H55.1484V109.415H0.796875Z' fill='#E6B670' />
            <rect x='47.4043' y='116.347' width='1.37619' height='31.422' fill='#E6B670' />
            <rect x='16.0674' y='115.664' width='32.0173' height='1.35062' fill='#E6B670' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M56.3245 109.204L39.8872 125.336L38.9141 124.381L55.3514 108.249L56.3245 109.204Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M16.5603 148.246L3.30026 161.259L2.32715 160.304L15.5872 147.291L16.5603 148.246Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M31.7445 140.945L11.0512 161.253L10.0781 160.298L30.7713 139.99L31.7445 140.945Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M24.0013 133.336L3.30807 153.645L2.33496 152.69L23.0282 132.381L24.0013 133.336Z'
              fill='#E6B670'
            />
            <rect x='4.92578' y='115.664' width='7.26234' height='1.35062' fill='#E6B670' />
            <rect x='47.4043' y='151.577' width='1.37619' height='7.12729' fill='#E6B670' />
            <rect x='65.9922' y='139.91' width='100.612' height='1.22043' fill='#E6B670' />
            <rect x='56.3252' y='149.527' width='61.0998' height='1.22043' fill='#E6B670' />
            <rect x='65.9922' y='130.293' width='51.4499' height='1.22043' fill='#E6B670' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M65.096 116.688L47.7441 99.6584L48.6235 98.7954L65.9753 115.825L65.096 116.688Z'
              fill='#E6B670'
            />
            <rect x='121.057' y='149.478' width='7.26233' height='1.35062' fill='#E6B670' />
            <rect x='121.057' y='130.228' width='7.26233' height='1.35062' fill='#E6B670' />
            <rect x='65.7266' y='115.761' width='7.26234' height='1.35062' fill='#E6B670' />
            <rect x='22.832' y='0.0322266' width='1.24355' height='98.7407' fill='#E6B670' />
            <rect x='13.0176' y='48.2959' width='1.24355' height='59.9637' fill='#E6B670' />
            <rect x='32.6318' y='48.2959' width='1.24355' height='50.4932' fill='#E6B670' />
            <rect x='12.9678' y='37.605' width='1.3762' height='7.1273' fill='#E6B670' />
            <rect x='32.5654' y='37.605' width='1.37619' height='7.1273' fill='#E6B670' />
            <rect x='47.3066' y='91.9224' width='1.37619' height='7.1273' fill='#E6B670' />
          </svg>
        </div>
        <div className='bootom--right-strip'>
          <svg width='167' height='163' viewBox='0 0 167 163' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M144.761 141.13H101.601V115.794L102.977 114.443V139.779H143.401V100.124H117.602L118.978 98.7729H144.794L144.761 141.13Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M152.205 148.436V124.19H127.5V148.436H152.205V148.436ZM150.846 125.541V147.102H128.876V125.541H150.846V125.541Z'
              fill='#E6B670'
            />
            <path fillRule='evenodd' clipRule='evenodd' d='M166.796 109.415V108.064H111.068V162.756H112.444V109.415H166.796Z' fill='#E6B670' />
            <rect width='1.3762' height='31.422' transform='matrix(-1 0 0 1 120.188 116.347)' fill='#E6B670' />
            <rect width='32.0173' height='1.35062' transform='matrix(-1 0 0 1 151.525 115.664)' fill='#E6B670' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M111.268 109.204L127.706 125.336L128.679 124.381L112.241 108.249L111.268 109.204Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M151.032 148.246L164.293 161.259L165.266 160.304L152.006 147.291L151.032 148.246Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M135.848 140.945L156.542 161.253L157.515 160.298L136.821 139.99L135.848 140.945Z'
              fill='#E6B670'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M143.591 133.336L164.285 153.645L165.258 152.69L144.565 132.381L143.591 133.336Z'
              fill='#E6B670'
            />
            <rect width='7.26234' height='1.35062' transform='matrix(-1 0 0 1 162.667 115.664)' fill='#E6B670' />
            <rect width='1.3762' height='7.12729' transform='matrix(-1 0 0 1 120.188 151.577)' fill='#E6B670' />
            <rect width='100.612' height='1.22043' transform='matrix(-1 0 0 1 101.601 139.91)' fill='#E6B670' />
            <rect width='61.0999' height='1.22043' transform='matrix(-1 0 0 1 111.268 149.527)' fill='#E6B670' />
            <rect width='51.4499' height='1.22043' transform='matrix(-1 0 0 1 101.601 130.293)' fill='#E6B670' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M102.497 116.688L119.849 99.6584L118.969 98.7954L101.617 115.825L102.497 116.688Z'
              fill='#E6B670'
            />
            <rect width='7.26233' height='1.35062' transform='matrix(-1 0 0 1 46.5361 149.478)' fill='#E6B670' />
            <rect width='7.26233' height='1.35062' transform='matrix(-1 0 0 1 46.5361 130.228)' fill='#E6B670' />
            <rect width='7.26234' height='1.35062' transform='matrix(-1 0 0 1 101.866 115.761)' fill='#E6B670' />
            <rect width='1.24355' height='98.7407' transform='matrix(-1 0 0 1 144.761 0.0322266)' fill='#E6B670' />
            <rect width='1.24355' height='59.9637' transform='matrix(-1 0 0 1 154.575 48.2959)' fill='#E6B670' />
            <rect width='1.24355' height='50.4932' transform='matrix(-1 0 0 1 134.961 48.2959)' fill='#E6B670' />
            <rect width='1.3762' height='7.1273' transform='matrix(-1 0 0 1 154.625 37.605)' fill='#E6B670' />
            <rect width='1.3762' height='7.1273' transform='matrix(-1 0 0 1 135.027 37.605)' fill='#E6B670' />
            <rect width='1.3762' height='7.1273' transform='matrix(-1 0 0 1 120.286 91.9224)' fill='#E6B670' />
          </svg>
        </div>
        <div className='inner-box'>{children}</div>
      </div>
    </Container>
  );
};

export default Pannel;
