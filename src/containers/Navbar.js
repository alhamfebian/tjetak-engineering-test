import React from 'react';

import styled from 'styled-components';

import TjetakLogo from '../asset/tjetak-logo-blue.png';
import Packaging from '../asset/packaging.png';
import Clothing from '../asset/clothing.png';
import MarketingMaterials from '../asset/marketing-materials.png';
import Card from '../asset/card.png';
import Promotion from '../asset/promotion-items.png';
import Businessessential from '../asset/business-essentials.png';
import Book from '../asset/book.png';


const CATEGORIES = [
  {
    name: 'Keperluan Usaha',
    link: 'https://www.tjetak.com/category/business-essentials',
    image: Businessessential,
    subCategories: [
      {
        name: 'Kartu Nama',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Kop Surat',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Amplop',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Nota',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'ID Card',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Lanyard',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Kalender',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Continuous Form',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Stempel',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Kartu Ucapan',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Map Folder',
        link: 'https://www.tjetak.com/product/business-card',
      },
    ],
  },
  {
    name: 'Keperluan Pemasaran',
    image: Promotion,
    link: 'https://www.tjetak.com/category/business-essentials',
    subCategories: [
      {
        name: 'Brosur',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Poster',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'X Banner',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Roll Banner',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Spanduk',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Event Desk',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Pop Up Counter',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Stiker',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Kalender',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Y Banner',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Flyer',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Tripod Banner',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Gelang',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Mini X-Banner',
        link: 'https://www.tjetak.com/product/business-card',
      },
    ],
  },
  {
    name: 'Kemasan',
    image: Packaging,
    link: 'https://www.tjetak.com/category/business-essentials',
    subCategories: [
      {
        name: 'Box Makanan',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Gelas Plastik',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Paper Cup',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Take-away Bag',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Paper Bag',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Box Produk',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Hard Box',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Box Kardus',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Kantong Plastik',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Poly Mailer',
        link: 'https://www.tjetak.com/product/business-card',
      },
    ],
  },
  {
    name: 'Pakaian',
    image: Clothing,
    link: 'https://www.tjetak.com/category/business-essentials',
    subCategories: [
      {
        name: 'Kaos',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Polo',
        link: 'https://www.tjetak.com/product/business-card',
      },
    ],
  },
  {
    name: 'Buku',
    image: Book,
    link: 'https://www.tjetak.com/category/business-essentials',
    subCategories: [
      {
        name: 'Buku',
        link: 'https://www.tjetak.com/product/business-card',
      },
    ],
  },
  {
    name: 'Barang Promosi',
    image: MarketingMaterials,
    link: 'https://www.tjetak.com/category/business-essentials',
    subCategories: [
      {
        name: 'Pulpen',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Tas',
        link: 'https://www.tjetak.com/product/business-card',
      },
      {
        name: 'Drinkware',
        link: 'https://www.tjetak.com/product/business-card',
      },
    ],
  },
  {
    name: 'Kartu',
    image: Card,
    link: 'https://www.tjetak.com/category/business-essentials',
    subCategories: [
      {
        name: 'Kartu',
        link: 'https://www.tjetak.com/product/business-card',
      },
    ],
  },
];

export default function Navbar(props) {
  return(
    <NavWrapper>
      <FirstTier>
        <div className="content">
          <a href="tel:+622180511695">
            <i class="material-icons">phone</i>+6221 8051 1695 (Jakarta)
          </a>
          <a href="tel:+623160001639">
            <i class="material-icons">phone</i>+6231 6000 1639 (Surabaya)
          </a>
          <a href="https://wa.me/6282123279508">
            <i className="fab fa-whatsapp" />WA: +62 821 2327 9508
          </a>
          <a href="mailto:order@tjetak.com">
            <i class="material-icons">email</i>order@tjetak.com
          </a>
        </div>
      </FirstTier>
      <SecondTier>
        <img src={TjetakLogo} className="logo" alt="Logo Tjetak" />
        <div className="searchbox">
          <input type="text" placeholder="Cari produk..." />
          <i className="material-icons">search</i>
        </div>
        <div className="rightSide">
          <a className="masuk" href="https://www.tjetak.com/login">Masuk</a>
          <a className="daftar" href="https://www.tjetak.com/register">Daftar</a>
          <a className="cart" href="https://www.tjetak.com/cart">
            <span className="notification">0</span>
            <i className="material-icons">shopping_cart</i>
          </a>
        </div>
      </SecondTier>
      <ThirdTier>
        <div className="content">
          <Category>
            <span className="label"><i class="material-icons">apps</i>Layanan Kami<i class="material-icons">keyboard_arrow_down</i></span>
            <div className="overlay">
              {CATEGORIES.map((category, catIdx) => (
                <a className="overlayItem" href={category.link}>
                <img src={category.image}/>
                  {category.name}
                  <div className="subOverlay">
                    <TriangleAccent index={catIdx} />
                    {category.subCategories.map(subCat => <a className="subOverlayItem" href={subCat.link}>{subCat.name}</a>)}
                  </div>
                </a>
              ))}
            </div>
          </Category>
          <a className="link" href="https://www.tjetak.com/corporate"> Solusi Untuk Koperasi</a>
          <a className="link" href="https://www.tjetak.com/quotation/create"> Permintaan Barang Custom</a>
        </div>
      </ThirdTier>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const FirstTier = styled.div`
  width: 100%;
  background: #1977D2;

  .content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    a {
      font-size: 0.875rem;
      color: #FFF;
      display: flex;
      flex-flow: wrap row;
      justify-content: flex-end;
      align-items: center;
      align-content: center;
      text-decoration: none;
      padding: 0.5rem;
      cursor: pointer;
      margin: 0 0 0 1rem;

      &:hover {
        background: #FFF;
        color: #1977D2;
      }

      i {
        font-size: 1rem;
        margin-right: 0.5rem;
        font-size: 1.25rem;
      }
    }
  }
`;

const SecondTier = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 1rem 0;
  background: #FFF;

  .logo {
    width: 7.5rem;
    margin-right: 1rem;
  }

  .searchbox {
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 40%;
    max-width: 20rem;
    margin: 0 1rem 0 0;
    border: 0.1rem solid #EEE;
    border-radius: 0.25rem;
    background: #FFF;
    transition: 0.25s ease all;
    overflow: hidden;

    &:hover {
      border-color: #1977D2;
      transition: 0.25s ease all;
    }

    input {
      flex: 1;
      background: #FFF;
      outline: none;
      border: none;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
    }

    i {
      color: #1977D2;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      margin: 0 0.75rem 0 0;
    }
  }

  .rightSide {
    flex: 1;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    a {
      display: flex;
      margin: 0 0 0 1rem;
      color: #333;
      cursor: pointer;
      font-size: 0.875rem;
      line-height: 1rem;
      text-decoration: none;

      &.masuk,
      &.daftar {
        border: 0.1rem solid #1977D2;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
      }

      &.masuk {
        background: #FFF;
        border-color: #EEE;
        transition: 0.25s ease all;

        &:hover {
          color: #FFF;
          background: #1977D2;
          border-color: #1977D2;
          transition: 0.25s ease all;
        }
      }

      &.daftar {
        color: #FFF;
        background: #1977D2;
        transition: 0.25s ease all;

        &:hover {
          opacity: 0.875;
          transition: 0.25s ease all;
        }
      }

      &.cart {
        position: relative;

        &:hover {
          i {
            color: #1977D2;
            transition: 0.25s ease all;
          }
        }

        i {
          color: #333;
          font-size: 1.5rem;
          transition: 0.25s ease all;
        }

        .notification  {
          display: flex;
          flex-flow: wrap row;
          justify-content: center;
          align-items: center;
          align-content: center;      
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          background: #1977D2;
          color: #FFF;
          font-size: 0.75rem;
          width: 1rem;
          height: 1rem;
          border-radius: 0.75rem;
        }
      }
    }
  }
`;

const ThirdTier = styled.div`
  width: 100%;
  background: #fff;
  border-top: 0.1rem solid #EEE;
  border-bottom: 0.1rem solid #EEE;

  .content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    .link {
      font-size: 0.875rem;
      line-height: 1rem;
      color: #333;
      display: flex;
      flex-flow: wrap row;
      justify-content: flex-end;
      align-items: center;
      align-content: center;
      text-decoration: none;
      padding: 1rem;
      cursor: pointer;
      margin: 0;
  
      &:hover {
        background: #FAFAFA;
        color: #1977D2;
      }
    }
  }
`;

const Category = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 0 0 0 -1rem;

  img{
    width: 1rem;
    margin-right: 0.2rem;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #1977D2;
    }
  }

  &:hover {
    .label {
      background: #FAFAFA;
      color: #1977D2;
    }

    .overlay {
      display: flex;
      flex-flow: wrap row;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
    }
  }

  .label {
    font-size: 0.875rem;
    color: #333;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    cursor: pointer;
    background: #fff;
    padding: 1rem;

    i {
      font-size: 1rem;
      margin-right: 0.5rem;
      font-size: 1.25rem;

      &:last-of-type {
        margin-right: 0;
        margin-left: 0.5rem;
        color: #1977D2;
      }
    }
  }

  .overlay {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 12rem;
    background: #FFF;
    box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.05);
    z-index: 1001;

    .overlayItem {
      font-size: 0.75rem;
      line-height: 1rem;
      width: 100%;
      background: #FFF;
      display: flex;
      flex-flow: wrap row;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      cursor: pointer;
      margin: 0;
      padding: 0.5rem 1rem;

      &:hover {
        background: #FAFAFA;

        .subOverlay {
          display: flex;
          flex-flow: wrap row;
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;
        }
      }

      .subOverlay {
        display: none;
        width: 24rem;
        position: absolute;
        top: 0;
        left: 100%;
        bottom: 0;
        height: 100%;
        background: #FFF;
        box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.05);
        z-index: 1002;
        padding: 0;

        .subOverlayItem {
          width: 50%;
          margin: 0;
          font-size: 0.8rem;
          line-height: 1rem;
          text-align: left;
          margin: 0;
          padding: 0.5rem 1rem;
          backgorund: #FFF;
          display: flex;
          flex-flow: wrap row;
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;

          &:hover {
            background: #F5F5F5;
          }
        }
      }
    }
  }
`;

const TriangleAccent = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: ${props => `calc(${props.index} * 2rem)`};
  z-index: 1003;
  border-top: 1rem solid transparent;
  border-left: 1rem solid #FAFAFA;
  border-bottom: 1rem solid transparent;
  border-right: 1rem solid transparent;
`;
