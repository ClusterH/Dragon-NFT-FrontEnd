import React from 'react';
import styled from 'styled-components';

import Pannel from '../../components/Pannel';
import DragonInfo from '../../components/DragonInfo';

const Container = styled.div`
  .post-combat {
    padding: 286px 0 108px;
  }
  .post-combat .combat-content {
    padding: 0 45px;
  }
  .combat-content .title {
    margin-bottom: 40px;
  }
  .combat-content .title h2 {
    font-family: 'Cinzel', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 100%;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: #e6b670;
  }
  .combat-content .title p {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }

  .combat-transactions {
    position: relative;
    margin-bottom: 30px;
  }
  .combat-transactions .banner-txt {
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.2;
    letter-spacing: 0.25px;
    color: #ffd58c;
  }
  .options-list {
    margin-bottom: 40px;
    list-style: none;
  }

  .options-list li {
    margin: 2px -15px;
    padding: 5px 15px;
    width: calc(100% + 30px);
  }
  .options-list li:hover {
    background: #343131;
  }
  .options-list li a {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 22px;
    opacity: 0.8;
    list-style: none;
    color: #85beeb;
  }
  .options-list li a:hover {
    color: #85beeb;
  }

  .combat-transactions .instructions-box {
    width: 407px;
    height: auto;
    position: absolute;
    padding: 24px;
    top: 0;
    right: -42px;
    bottom: -25px;
    background: rgba(255, 255, 255, 0.0001);
  }
  .combat-transactions .instructions-box .inner-box {
    padding: 166px 22px 61px !important;
  }

  .combat-transactions .instructions-box .para-text {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.5;
    color: #fff;
    margin: 0 0 15px;
  }
  .combat-transactions .instructions-box .para-text span {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: inherit;
  }
  .combat-transactions .instructions-box .para-text.clr-gold {
    color: #ffd58c;
  }

  .post-combat .reward-wrp .qlp-txt,
  .post-combat .reward-wrp .reward-txt,
  .post-combat .budget-list li {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 22px;
    opacity: 0.8;
    list-style: none;
  }

  .post-combat .reward-wrp {
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 16px;
    list-style: none;
    line-height: 200%;
  }

  @media only screen and (max-width: 767px) {
    .post-combat {
      padding: 0;
    }
    .post-combat .combat-content {
      padding: 0;
    }
    .combat-content .title {
      display: none;
    }
    .combat-transactions .instructions-box {
      width: auto;
      position: relative;
      padding: 0;
      top: 0;
      right: 0;
      bottom: 0;
      box-shadow: none;
    }

    .combat-transactions .combat-banner {
      margin: 0 -16px 0 -16px;
      width: calc(100% + 32px);
    }
    .combat-banner img {
      height: 458px;
      margin: 70px 0 0 0;
      width: 100%;
      object-fit: cover;
    }
    .instructions-box .top-strip {
      top: 142px;
    }
    .combat-transactions {
      margin-bottom: 0;
    }

    .post-combat .options-list,
    .post-combat .reward-wrp {
      margin-bottom: 15px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .combat-content .title h2 {
      font-size: 32px;
    }
    .combat-content .title p {
      font-size: 14px;
    }
    .post-combat {
      padding: 170px 0 108px;
    }
    .post-combat .combat-content {
      padding: 0px 35px 0 0;
    }
    .combat-transactions .instructions-box .para-text {
      line-height: 1.2;
    }

    .combat-banner img {
      min-height: 400px;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1326px) {
    .combat-transactions .instructions-box .para-text {
      line-height: 1.2;
    }
    .combat-banner img {
      min-height: 400px;
      object-fit: cover;
    }
  }
`;

const Plains = () => {
  return (
    <Container className='content'>
      <section className='post-combat'>
        <div className='container'>
          <div className='combat-content'>
            <div className='combat-transactions'>
              <div className='title'>
                <h2>The Plains</h2>
                <p>Herbies Healing Services</p>
              </div>

              <div className='combat-banner'>
                <img src='assets/images/post-combat.png' alt='image' />
              </div>
              <Pannel>
                <p className='para-text'>
                  You smash <span>PAPERHANDS</span> with your
                  <span>SHARPENED TOOTHBRUSH</span> for 4 <span>DAMAGE</span>
                </p>
                <p className='para-text'>
                  <span>PAPERHAND</span> hits you for 1 <span>DAMAGE</span> but your <span>FANCY ROBE</span> absorbs the blow
                </p>
                <p className='para-text'>
                  You smash <span>PAPERHANDS</span> with your
                  <span>SHARPENED TOOTHBRUSH</span> for 1 DAMAGE
                </p>

                <p className='para-text clr-gold'>
                  You have defeated
                  <span>PAPERHANDS</span>
                </p>

                <p className='para-text'>
                  <span>YOU</span> - "Your days of bad trading are over, punk!"
                </p>

                <p className='para-text clr-gold'>
                  You have gained 100 experience, amongst
                  <span>PAPER HANDS</span> belongings your find a<span>SHINY PAIR OF SNEAKERS</span> and 0.005
                  <span>DGNG</span>
                </p>

                <ul className='options-list'>
                  <li>
                    <a href='#'> [1] Option One</a>
                  </li>
                  <li>
                    <a href='#'> [2] Option Two</a>
                  </li>
                </ul>
                <DragonInfo />
              </Pannel>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Plains;
