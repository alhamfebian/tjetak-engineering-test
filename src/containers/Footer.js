import React from 'react';

import styled from 'styled-components';

import TjetakLogo from '../asset/tjetak-logo-blue.png';
import BCALogo from '../asset/bca-logo.png';
import BNILogo from '../asset/bni-logo.png';
import GoSendLogo from '../asset/go-send-logo.png';
import GoPayLogo from '../asset/gopay-logo.png';
import JNELogo from '../asset/jne-logo.png';
import PermataLogo from '../asset/permata-logo.png';
import MandiriLogo from '../asset/mandiri-logo.png';

export default function Footer (props) {
  return (
    <FooterWrapper>
      <FirstTier>
        <div className="column firstColumn">
          <img src={TjetakLogo} className="logo"/>
          <h1>UOB Plaza</h1>
          <p>Jalan M.H. Thamrin Kav. 8-10, Tanah Abang, Jakarta Pusat, DKI Jakarta 10230</p>
          <h1>Surabaya</h1>
          <p>Jalan M.H. Thamrin Kav. 8-10, Tanah Abang, Jakarta Pusat, DKI Jakarta 10230</p>
        </div>
        <div className="column">
          <h1>Tjetak</h1>
          <a>Tentang Kami</a>
          <a>Syarat & Ketentuan</a>
          <a>Kebijakan Pirvasi</a>
          <a>Karir</a>
        </div>
        <div className="column">
          <h1>BANTUAN</h1>
          <a>Pertanyaan Umum</a>
          <a>Hubungi Kami</a>
        </div>
        <div className="column">
          <h1>PEMBAYARAN</h1>
          <img src={MandiriLogo} className="logoFooter"/>
          <img src={BNILogo} className="logoFooter"/>
          <img src={PermataLogo} className="logoFooter"/>
          <img src={BCALogo} className="logoFooter"/>
          <img src={GoPayLogo} className="logoFooter"/>
        </div>
        <div className="column">
          <h1>PENGIRIMAN</h1>
          <img src={GoSendLogo} className="logoFooter"/>
          <img src={JNELogo} className="logoFooter"/>
        </div>
      </FirstTier>
      <SecondTier>
        <p>© 2017-2018 PT Katalisator Asa Indonesia</p>
      </SecondTier>
    </FooterWrapper>
  )
}


const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  border-top: 0.05rem solid #dbdbdb;
  padding: 3rem 0 1.5rem;
  
  @media screen and (max-width: 40rem) {
    padding: 2rem 1rem;
  }
`;

const FirstTier = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;

  h1 {
    font-weight: 700;
    margin: 0 0 1rem 0;
    font-size: 100%;
    color: #4a4a4a;

    @media screen and (max-width: 40rem) {
      margin: 0.75rem 0 1rem 0;
    }
  }

  a {
    display: flex;
    width: 100%;
    color: #1977d2;
    cursor: pointer;
    text-decoration: none;
    margin: 0 0 0.75rem;

    &:hover {
      color: #000000;
    }
  }

  .column {
    width: calc(20% - 1rem);

    @media screen and (max-width: 40rem) {
      width: 100%;
      margin-bottom: 1rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }    
  }

  .firstColumn {
    color: #7a7a7a;

    h1 {
      margin: 1rem 0 0.5rem;

      @media screen and (max-width: 40rem) {
        margin: 0.75rem 0 1rem 0;
      }
    }

    p {
      margin: 0;
    }
  }

  .logo {
    width: 7.5rem;
    margin: 0 0 1rem;
  }

  .logoFooter {
    width: 3rem;
    margin: 0 1rem 1rem 0;

    &:last-of-type {
      margin: 0 0 1rem;
    }
  }
`;

const SecondTier = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 1rem 0 0;
  background: #FFF;
  border-top: 0.05rem solid #dbdbdb;

  p {
    font-size: 0.75rem;
    margin: 0;
    color: #AAA;
  }
`;