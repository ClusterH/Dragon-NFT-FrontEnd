import React from 'react';
import styled from 'styled-components';
import Pannel from '../../components/Pannel';
import Button from '../../components/Button/Button';
import DragonInfo from '../../components/DragonInfo';
// import { useWeb3React } from '@web3-react/core';
const Container = styled.div`
  width: 100%;
  .home-banner {
    padding: 235px 0 80px;
    background: url('assets/images/homebanner-img.png') no-repeat left top;
    background-size: cover;
    min-height: 100vh;
  }
  .home-banner .banner-content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-left: 156px;
  }
  .home-banner .home-news {
    background: #0c0c0b;
    border: 2px solid #ffd58c;
    padding: 39px 21px 33px;
    width: calc(100% - 485px);
  }
  .home-banner .home-news h3 {
    font-family: Cinzel;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 32px;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .home-news .news {
    margin-bottom: 20px;
  }
  .home-news .news:last-child {
    margin-bottom: 20px;
  }
  .home-news .news-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 22px;
    letter-spacing: 0.25px;
    margin-bottom: 0;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .home-news .news-link,
  .home-news .news-desc {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    line-height: 22px;
    letter-spacing: 0.25px;
    color: #ffffff;
    margin-bottom: 5px;
  }
  .home-news .news-link {
    text-decoration: underline;
    margin-bottom: 0;
  }
  .budget-analysis .budget-list {
    padding: 0;
    margin: 0;
  }
  .budget-analysis li {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 22px;
    color: #ffffff;
    opacity: 0.8;
    list-style: none;
  }

  .home-banner .enter-bank {
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }

  @media only screen and (max-width: 767px) {
    .home-news .news-link,
    .home-news .news-desc {
      font-size: 3vw;
      line-height: 1.2;
      letter-spacing: 0.14px;
    }
    .home-banner .home-news {
      width: 100%;
      padding: 15px;
      margin-bottom: 150px;
    }
    .home-news .news {
      margin-bottom: 10px;
    }
    .home-banner .banner-content {
      padding-left: 0;
    }
    .home-news .news-title {
      font-size: 3vw;
      margin-bottom: 5px;
    }
    .home-banner {
      padding: 125px 0 0;
    }
    .home-banner .home-news h3 {
      font-size: 4vw;
      line-height: 1.2;
      margin-bottom: 15px;
    }

    .home-banner .banner-content {
      display: block;
    }
    .home-banner .enter-bank {
      padding: 20px 0;
    }
    .budget-analysis li {
      font-size: 3.2vw;
      line-height: 1.2;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .home-banner .home-news {
      width: calc(100% - 385px);
      padding: 20px;
    }
    .home-banner .banner-content {
      padding-left: 0;
    }
    .home-banner {
      padding: 150px 0 80px;
    }
    .home-news .news-title {
      font-size: 1.3rem;
    }

    .home-banner .home-news h3 {
      font-size: 1.8rem;
      line-height: 20px;
    }
    .home-news .news-desc {
      font-size: 1.3rem;
    }
    .budget-analysis li {
      font-size: 1.3rem;
    }
    .home-news .news-link,
    .home-news .news-desc {
      font-size: 1.4rem;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1326px) {
    .home-banner .banner-content {
      padding-left: 0;
    }
    .home-banner .home-news {
      width: calc(100% - 422px);
    }
    .home-banner {
      padding: 200px 0 80px;
    }
  }
`;
const Home = () => {
  return (
    <Container className='content'>
      <section className='home-banner'>
        <div className='container'>
          <div className='banner-content'>
            <div className='home-news'>
              <h3>News and Updates</h3>
              <div className='news'>
                <h6 className='news-title'>New Characters Released</h6>
                <p className='news-desc'>
                  Sep 4th - Chroma Dragon Hunters joins the party. Get your minted today. Some bullish stat about Liquidity rewards fot this NFT and
                  othher filler text. so we can get up to three lines. If it passes this point just fade ou...
                </p>
                <a href='#!' className='news-link'>
                  Visit Marketplace
                </a>
              </div>
              <div className='news'>
                <h6 className='news-title'>New Characters Released</h6>
                <p className='news-desc'>
                  Sep 4th - Chroma Dragon Hunters joins the party. Get your minted today. Some bullish stat about Liquidity rewards fot this NFT and
                  othher filler text. so we can get up to three lines. If it passes this point just fade out...
                </p>
                <a href='#!' className='news-link'>
                  Visit Marketplace
                </a>
              </div>
              <div className='news'>
                <h6 className='news-title'>New Characters Released</h6>
                <p className='news-desc'>
                  Sep 4th - Chroma Dragon Hunters joins the party. Get your minted today. Some bullish stat about Liquidity rewards fot this NFT and
                  othher filler text. so we can get up to three lines. If it passes this point just fade ou...
                </p>
                <a href='#!' className='news-link'>
                  Visit Marketplace
                </a>
              </div>
            </div>
            <Pannel>
              <div className='budget-analysis'>
                <ul className='budget-list'>
                  <li>Total Value Locked: $1,000,000</li>
                  <li>Total Native Liquidity: $220,000</li>
                  <li>Market Cap: $2,400,000</li>
                  <li>Max Supply: $1,000,000</li>
                  <li>Circulating Supply: $500,000</li>
                </ul>
              </div>
              <div className='enter-bank'>
                <Button label='Enter the Bank' />
              </div>
              <DragonInfo />
            </Pannel>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
