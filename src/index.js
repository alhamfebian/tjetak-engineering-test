import 'sanitize.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import MainPage from './containers/MainPage';
import Tabel from './containers/Tabel';

const App = () => {
  const [currentFocus, setCurrentFocus] = useState('selectSpec');

  return (
    <PageWrapper>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <CenterWrapper currentFocus={currentFocus}>
        <div className="selectSpec">
          <MainPage setCurrentFocus={setCurrentFocus} />
          {console.log(currentFocus)}
        </div>
        <div className="displayPrice">
          <h1>Harga Cetak di Kota Jakarta Pusat </h1>
          <Tabel />
        </div>
      </CenterWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  width: 100%;
  padding: 15rem 0 0;
`;

const NavbarWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
`;

const CenterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;

  .selectSpec {
    flex: ${props => props.currentFocus === 'selectSpec' ? 2 : 1};
    opacity: ${props => props.currentFocus === 'selectSpec' ? 1 : 0.5};
    transition: 0.25s ease all;
    margin-right: 2rem;
  }

  .displayPrice {
    flex: ${props => props.currentFocus === 'displayPrice' ? 2 : 1};
    opacity: ${props => props.currentFocus === 'displayPrice' ? 1 : 0.5};
    transition: 0.25s ease all;
    visibility: ${props => props.currentFocus === 'displayPrice' ? 'visible' : 'hidden'};

    h1 {
      text-align : center;
    }
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  z-index: 1000;
  margin-top: 5rem;
  `;

ReactDOM.render(<App />, document.querySelector('#root'));

