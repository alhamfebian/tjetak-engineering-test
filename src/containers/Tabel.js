import React from 'react';
import styled from 'styled-components';

export default function Tabel(props) {
  return (
    <TabelWrapper>
      <TabelPrice>
      <table>
        <tr>
          <th>Kuantitas (per box)</th>
          <th>Perkiraan Waktu Jadi Senin, 18 Maret 2019</th>
          <th>Perkiraan Waktu Jadi Selasa, 19 Maret 2019</th>
          <th>Perkiraan Waktu Jadi Rabu, 20 Maret 2019</th>
        </tr>
        <tr className="bgColor">
          <td>1 Box</td>
          <td>
            <input type="checkbox"/>
            Total : Rp 104.755,00
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 98.208,00 
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 94.116,00 
          </td>
        </tr>
        <tr>
          <td>2 Box</td>
          <td>
            <input type="checkbox"/>
            Total : Rp 209.510,00
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 196.416,00 
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 188.232,00 
          </td>
        </tr>
        <tr className="bgColor">
          <td>3 Box</td>
          <td>
            <input type="checkbox"/>
            Total : Rp 302.703,00
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 283.482,00 
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 273.873,00 
          </td>
        </tr>
        <tr>
          <td>5 Box</td>
          <td>
            <input type="checkbox"/>
            Total : Rp 491.040,00
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 459.360,00 
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 447.480,00 
          </td>
        </tr>
        <tr className="bgColor">
          <td>10 Box</td>
          <td>
            <input type="checkbox"/>
            Total : Rp 982.080,00
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 918.720,00 
          </td>
          <td>
            <input type="checkbox"/>
            Total : Rp 894.960,00 
          </td>
        </tr>
      </table>
      <BeliProduk> Beli Produk </BeliProduk>
      </TabelPrice>
    </TabelWrapper>
  )
}

const TabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const TabelPrice = styled.div`
  table {
    border: 0.1rem solid #000000;
    text-align: center;
  }

  tr {
    border: 0.1rem solid #000000;
    padding-top: 1rem;
    padding-bottom:1rem;
  }

  td {
    border: 0.1rem solid #000000;
    padding-top: 1rem;
    padding-bottom:1rem;
  }
  
  th {
    border: 0.1rem solid #000000;
    padding-top: 1rem;
    padding-bottom:1rem;
  }

  .bgColor {
    background-color: #62a6ff;
  }

  input {
    width: 1rem;
    height: 1rem;
    padding: 0;
    margin:0 1rem 0 0;
    vertical-align: bottom;
    position: relative;
  }
`;

const BeliProduk = styled.div`
    width: 30%;
    margin: 1rem 18rem 0;
    padding: 0.5rem 0.75rem;
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 0.1rem solid #1977d2;
    border-radius: 0.25rem;
    background: #FFF;
    color: #1977d2;
    font-weight: 700;

  &:hover {
    background-color: #1977d2;
    color: #FFF;
    transition: 0.25s ease all;
  }
`;