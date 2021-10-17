import React from 'react';
import styled from 'styled-components';

import Pannel from '../../components/Pannel';
import RankingItem from '../../components/RankingItem';

const Container = styled.div`
  .rk-mo-view {
    display: none;
    position: fixed;
    bottom: 0;
    margin: 0 -16px 0 -20px;
    width: calc(100% + 32px);
    background: #1e1e1e;
    width: 100%;
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px -4px 25px;
  }

  .ranking-item {
    margin-bottom: 17px;
  }

  .txt {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    width: calc(100% - 122px);
  }
  .check-group {
    max-width: 263px;
    margin: 0 auto;
  }
  .check-group label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .check-group .number {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    position: relative;
    color: #fff;
    width: 40px;
    margin-right: 16px;
    text-align: right;
  }
  .check-group .check-status {
    width: 50px;
    height: 50px;
    border: 4px solid #e6b670;
    background: transparent;
    transition: all 0.3s ease-in-out;
    margin-right: 16px;
  }
  .check-status img {
    padding: 2px;
  }
  .check-group .txt {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    width: calc(100% - 122px);
  }
  .rankings {
    padding: 154px 0 108px;
  }

  .rankings .rankings-content {
    display: flex;
    justify-content: center;
  }

  .rankings .instructions-box {
    width: 509px;
  }

  .rankings .heading h4 {
    font-family: 'Cinzel', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 45px;
    text-align: center;
    padding-bottom: 17px;
    letter-spacing: -0.02em;
    color: #d3d3d3;
  }

  .rankings .instructions-box .inner-box {
    position: relative;
    padding: 30px 22px 12px;
  }

  .rankings .bootom--center-strip {
    z-index: 1;
  }
  .rankings .bootom--left-strip {
    z-index: 1;
  }
  .rankings .bootom--right-strip {
    z-index: 1;
  }

  .rankings .inner-box:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 162px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(178.87deg, rgba(0, 0, 0, 0.0001) 6.15%, #100d0d 82.22%);
  }

  .rankings .tringle-up-txt {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
  }
  .rankings .tringle-up-txt:after {
    width: 0;
    content: '';
    position: absolute;
    z-index: 1;
    height: 0;
    left: 50%;
    top: 100%;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 7px solid #e6b670;
    transform: translate(-50%);
  }
  #onscrllbtn {
    position: absolute;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    left: 65px;
    bottom: 65px;
    z-index: 1;
  }

  /*scroll css start*/
  .rankings .scrollbar {
    float: left;
    height: 85vh;
    width: 100%;
    overflow-y: auto;
    margin-bottom: 25px;
  }
  .rankings .scrollbar::-webkit-scrollbar {
    display: none;
  }
  .rankings .scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media only screen and (max-width: 319px) {
    .check-group .txt {
      font-size: 12px;
    }
    .rankings .heading h4 {
      font-size: 35px;
    }
    .check-group .number {
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 767px) {
    .rk-mo-view {
      display: block;
    }
    .rankings-content .top-strip {
      display: none;
    }
    #onscrllbtn {
      display: none;
    }
    .rankings {
      padding: 70px 0 0;
    }
    .rankings .instructions-box {
      margin: 0 -16px 0 -20px;
      width: calc(100% + 34px);
    }
    .rankings .scrollbar {
      margin-bottom: 0;
    }
    .rankings .inner-box:after {
      display: none;
    }
  }
`;

const tempArray = [];
for (let ii = 0; ii < 31; ii++) {
  tempArray.push(ii);
}

const Rankings = () => {
  return (
    <Container className='content'>
      <section className='rankings'>
        <div className='container'>
          <div className='rankings-content'>
            <Pannel>
              <div className='heading'>
                <h4>Rankings</h4>
              </div>
              <form className='name-address'>
                <div id='style-3' className='scrollbar wrapallbox'>
                  <div className='force-overflow'></div>
                  {tempArray.map((item) => (
                    <div className='ranking-item' key={item}>
                      <RankingItem idx={item + 1} />
                    </div>
                  ))}
                </div>
                <a id='onscrllbtn' href='#!'>
                  <span className='tringle-up-txt'>31</span>
                </a>
                <div className='rk-mo-view'>
                  <div className='check-group'>
                    <label htmlFor='checked'>
                      <span className='number'>31</span>
                      <span className='check-status'>
                        <img src='https://storage.googleapis.com/opensea-prod.appspot.com/creature/50.png' alt='check-status' />
                      </span>
                      <span className='txt'>You</span>
                    </label>
                  </div>
                </div>
              </form>
            </Pannel>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Rankings;
