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
        </div>
        <div className="displayPrice">
          <Tabel />
        </div>
      </CenterWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  padding: 15rem 0 0;

  @media screen and (max-width: 40rem) {
    padding: 7rem 0 0;
  }
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

  @media screen and (max-width: 40rem) {
    flex-direction: column;
  }

  .selectSpec {
    flex: ${props => props.currentFocus === 'selectSpec' ? 'none' : 1};
    width: ${props => props.currentFocus === 'selectSpec' ? '100%' : 'auto'};
    opacity: ${props => props.currentFocus === 'selectSpec' ? 1 : 0.5};
    transition: 0.25s ease all;
    margin-right: 2rem;

    @media screen and (max-width: 40rem) {
      width: 100%;
      flex: none;
    }
  }

  .displayPrice {
    flex: ${props => props.currentFocus === 'displayPrice' ? 2 : 'none'};
    flex-flow: wrap row;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    overflow: hidden;
    display: ${props => props.currentFocus === 'displayPrice' ? 'flex' : 'none'};
    opacity: ${props => props.currentFocus === 'displayPrice' ? 1 : 0};
    transition: 0.25s ease all;

    @media screen and (max-width: 40rem) {
      width: 100%;
      flex: none;
    }
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

ReactDOM.render(<App />, document.querySelector('#root'));

