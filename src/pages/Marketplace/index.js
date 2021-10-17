import React from 'react';
import styled from 'styled-components';

import Pannel from '../../components/Pannel';
import Button from '../../components/Button/Button';
import ButtonGroup from '../../components/ButtonGroup';
import RadioSwitch from '../../components/RadioSwitch';
import MarketItem from '../../components/MarketItem';
import ButtonCross from '../../components/ButtonCross';

const Container = styled.div`
  .marketplace {
    padding: 208px 0 108px;
  }
  .marketplace .marketplace-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 12px 0 50px;
  }
  .marketplace .marketplace-transactions {
    width: calc(100% - 429px);
  }

  .marketplace .instructions-box {
    width: 408px;
  }
  .marketplace .instructions-box .top-strip {
    top: -51px;
    padding: 24px;
  }
  .marketplace .instructions-box .inner-box {
    padding: 170px 22px 60px 12px;
  }
  .cart .final-progress .prog-coln {
    display: flex;
    align-items: flex-end;
  }
  .marketplace .buy-btn {
    display: flex;
    justify-content: center;
  }

  /** button group */
  .mg-group-btn {
    display: flex;
    margin-bottom: 28px;
    align-items: center;
  }

  .single-box {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }

  .market-item {
    margin-bottom: 20px;
    width: 25%;
    padding-right: 15px;
  }

  /** add cart */
  .cart .final-progress {
    margin-bottom: 34px;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .cart .placeholder {
    width: 49px;
    height: 49px;
    background: #c4c4c4;
    border: none;
    cursor: pointer;
  }

  .cart .pdtop {
    padding: 28px 0 0;
  }
  .final-progress .prog-coln.width100 {
    width: 100%;
  }
  .final-progress .prog-coln {
    width: calc(100% - 59px);
  }
  .cart .final-progress .sp-text {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    width: 60px;
    color: #fff;
  }
  .cart .cross-btn {
    position: relative;
    right: -8px;
    bottom: 4px;
  }

  .cart .prog-value {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0.25px;
    text-transform: capitalize;
    width: 79%;
    color: #ffffff;
    margin-bottom: 0px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .marketplace .marketplace-content {
      padding: 0 12px 0 0;
    }
  }

  @media only screen and (max-width: 767px) {
    .marketplace .marketplace-transactions {
      width: 100%;
    }
    .marketplace .instructions-box {
      width: auto;
    }
    .single-box .market-item {
      width: 33%;
      padding: 0 15px;
      margin-bottom: 38px;
    }
    .marketplace .marketplace-content {
      padding: 0;
      display: block;
    }
    .marketplace {
      padding: 149px 0 0;
    }
    .mg-group-btn {
      margin-bottom: 19px;
    }
    .marketplace-transactions .mg-group-btn {
      padding: 0 0 0 15px;
      position: relative;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1022px) {
    .marketplace-transactions .mg-group-btn {
      padding: 0;
      position: relative;
    }
  }

  @media only screen and (max-width: 600px) {
    .marketplace-transactions .mg-group-btn {
      padding: 0 0 0 6px;
      position: relative;
    }

    .single-box .market-item {
      width: 50%;
      padding: 0 8px;
      margin-bottom: 38px;
    }
  }
`;

const tempArray = [];
for (let ii = 0; ii < 8; ii++) {
  tempArray.push(ii);
}

const Marketplace = () => {
  return (
    <Container className='content'>
      <section className='marketplace'>
        <div className='container'>
          <div className='marketplace-content'>
            <div className='marketplace-transactions'>
              <div className='mg-group-btn'>
                <ButtonGroup />
                <RadioSwitch label='My inventory' />
              </div>
              <div className='transactions'>
                <div className='marketplace-column'>
                  <div className='single-box'>
                    {tempArray.map((item) => (
                      <div className='market-item' key={item}>
                        <MarketItem selected={item % 3 === 0} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Pannel>
              <div className='cart'>
                <div className='final-progress'>
                  <div className='placeholder'>&nbsp;</div>
                  <div className='prog-coln'>
                    <p className='prog-value'>Should there be stats somewhere?</p>
                    <div className='sp-text'>2 DGNG</div>
                    <ButtonCross className='cross-btn' />
                  </div>
                </div>

                <div className='final-progress'>
                  <div className='placeholder'>&nbsp;</div>
                  <div className='prog-coln'>
                    <p className='prog-value'>Armour of Divergence</p>
                    <div className='sp-text'>2 DGNG</div>
                    <ButtonCross className='cross-btn' />
                  </div>
                </div>

                <div className='final-progress'>
                  <div className='placeholder'>&nbsp;</div>
                  <div className='prog-coln'>
                    <p className='prog-value'>Ancient Contrively-named Hunter’s Loincloth</p>
                    <div className='sp-text'>2 DGNG</div>
                    <ButtonCross className='cross-btn' />
                  </div>
                </div>

                <div className='final-progress pdtop'>
                  <div className='prog-coln width100'>
                    <div className='prog-value'>Total</div>
                    <div className='sp-text'>2 DGNG</div>
                  </div>
                </div>
              </div>

              <div className='buy-btn'>
                <Button label='Buy all' />
              </div>
            </Pannel>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Marketplace;
