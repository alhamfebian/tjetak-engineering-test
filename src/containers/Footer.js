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
        <div className="column1"> 
          <img src={TjetakLogo} className="logo"/>
          <h1> UOB Plaza </h1>
          <p> Jalan M.H. Thamrin Kav. 8-10, Tanah Abang, Jakarta Pusat, DKI Jakarta 10230 </p>
          <h1> Surabaya </h1>
          <p> Jalan M.H. Thamrin Kav. 8-10, Tanah Abang, Jakarta Pusat, DKI Jakarta 10230 </p>
        </div>
        <div className="column2"> 
          <h1> Tjetak </h1>
          <a> Tentang Kami </a>
          <br/>
          <br/>
          <a> Syarat & Ketentuan </a>
          <br/>
          <br/>
          <a> Kebijakan Pirvasi </a>
          <br/>
          <br/>
          <a> Karir </a>
        </div>
        <div className="column3"> 
          <h1> BANTUAN </h1>
          <a> Pertanyaan Umum </a>
          <br/>
          <br/>
          <a> Hubungi Kami </a>
        </div>
        <div className="column4"> 
          <h1> PEMBAYARAN </h1>
          <img src={MandiriLogo} className="logoFooter"/>
          <img src={BNILogo} className="logoFooter"/>
          <img src={PermataLogo} className="logoFooter"/>
          <img src={BCALogo} className="logoFooter"/>
          <img src={GoPayLogo} className="logoFooter"/>
        </div>
        <div className="column5"> 
          <h1> PENGIRIMAN </h1>
          <img src={GoSendLogo} className="logoFooter"/>
          <img src={JNELogo} className="logoFooter"/>
        </div>
      </FirstTier>
      <SecondTier>
        <p> © 2017-2018 PT Katalisator Asa Indonesia </p>
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
    margin: 0.75rem 0 1.5rem 0;
    font-size: 100%;
    color: #4a4a4a;
  }

  a {
    color: #1977d2;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 5rem

    &:hover {
      color: #000000
    }
  }

  .column1 {
    width: calc(20% - 1rem);
    color: #7a7a7a;
  }
  
  .column2 {
    width: calc(20% - 1rem);
  }

  .column3 {
    width: calc(20% - 1rem);
  }

  .column4 {
    width: calc(20% - 1rem);
  }

  .column5 {
    width: calc(20% - 1rem);
  }

  .logo {
    width: 7.5rem;
    margin-top: 1rem;
  }

  .logoFooter {
    width: 4rem;
  }
`;

const SecondTier = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 0.5rem 0;
  background: #FFF;
  border-top: 0.05rem solid #dbdbdb;

  p {
    margin-left: 13rem;
    font-size: 0.75rem;
  }
`;