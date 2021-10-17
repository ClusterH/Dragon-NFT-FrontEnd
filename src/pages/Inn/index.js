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

  .combat-transactions .instructions-box {
    width: 407px;
    height: auto;
    position: absolute;
    padding: 24px;
    top: -100px;
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
    color: #ffffff;
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

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .post-combat .combat-content {
      padding: 0px 35px 0 0;
    }
    .combat-banner img {
      min-height: 400px;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  @media (max-width: 767px) {
    .post-combat {
      padding: 0;
    }
    .post-combat .combat-content {
      padding: 0;
    }

    .combat-banner img {
      height: 458px;
      margin: 70px 0 0 0;
      width: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .combat-transactions .combat-banner {
      margin: 0 -16px 0 -16px;
      width: calc(100% + 32px);
    }
    .combat-transactions {
      margin-bottom: 0;
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
  }
`;

const Inn = () => {
  return (
    <Container className='content'>
      <section className='post-combat'>
        <div className='container'>
          <div className='combat-content'>
            <div className='combat-transactions'>
              <div className='combat-banner'>
                <img src='assets/images/post-combat.png' alt='combat-banner' />
              </div>
              <Pannel>
                <p className='para-text'>You push through the doors and are overwhelmed by the smell of stale booze and sweaty warriors.</p>
                <p className='para-text'>"This looks like my kind of place!"</p>
                <ul className='options-list'>
                  <li>
                    <a href='#'> [1] Get a Room (0.005 DGNG)</a>
                  </li>
                  <li>
                    <a href='#'> [2] Request a Song(0.005 DGNG)</a>
                  </li>
                  <li>
                    <a href='#'> [3] Head to the Gambling Den</a>
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

export default Inn;
