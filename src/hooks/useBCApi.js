import { useState, useEffect } from 'react';

// import axios from 'axios';

import BCArtCarton from '../asset/business-card-Art Carton 260 GSM.png';
import BCBw from '../asset/business-card-BW.png';
import BCNettuno from '../asset/business-card-Nettuno.png';
import BCSplendorgel from '../asset/business-card-Splendorgel.png';
import OneSide from '../asset/business-card-1 Sisi.png';
import TwoSide from '../asset/business-card-2 Sisi.png';
import CNormal from '../asset/business-card-Normal.png';
import CRounded from '../asset/business-card-Rounded Corner.png';
import TanpaLaminasi from '../asset/business-card-Tanpa Laminasi.png';
import Glossy from '../asset/business-card-Glossy.png';
import Matte from '../asset/business-card-Matte.png';

// const BASE_URL = 'https://calc.tjetak.com/v1/business-card';

// const BASE_CONFIG = {
//   headers: {
//     Authorization: '$2y$10$3nySAAD/4Oz9JFEqykx7NeY6CuUIOkjY44.mVcB67iBtAJnZhEfjy',
//   },
// };

const SHORT_DESC_DUMMY = 'Sagittis proin urna laoreet at libero porttitor eu rhoncus habitant a ullamcorper laoreet at mauris sit interdum ante ullamcorper ullamcorper dignissim bibendum. Laoreet a vestibulum porttitor at facilisis ullamcorper primis diam consectetur morbi conubia adipiscing ac vestibulum diam id iaculis.';

export function useFetchBCData() {
  const [location, setLocation] = useState({ city: '', province: '' });
  const [bcSpecs, setBCSpecs] = useState([]);
  const [addSpecs, setAddSpecs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    async () => {
      // const specApiData = await axios.get(`${BASE_URL}/spec`, BASE_CONFIG);

      // setLocation({ city: specApiData.data[0].city, city: specApiData.data[0].province });
      // setBCSpecs(specApiData.data[0].specs);
      
      // const addSpecApiData = await axios.get(`${BASE_URL}/spec`, BASE_CONFIG);

      // setAddSpecs(addSpecApiData.data[0].add_specs);
      setLocation({ city: 'Kota Jakarta Pusat', province: 'Daerah Khusus Ibukota Jakarta' });
      setBCSpecs([
        {
          "paper": "BW",
          "sides": "1 Sisi",
          paperImage: BCBw,
          sideImage: OneSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        },
        {
          "paper": "BW",
          "sides": "2 Sisi",
          paperImage: BCBw,
          sideImage: TwoSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        },
        {
          "paper": "Art Carton 260 GSM",
          "sides": "1 Sisi",
          paperImage: BCArtCarton,
          sideImage: OneSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        },
        {
          "paper": "Art Carton 260 GSM",
          "sides": "2 Sisi",
          paperImage: BCArtCarton,
          sideImage: TwoSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        },
        {
          "paper": "Nettuno",
          "sides": "1 Sisi",
          paperImage: BCNettuno,
          sideImage: OneSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        },
        {
          "paper": "Nettuno",
          "sides": "2 Sisi",
          paperImage: BCNettuno,
          sideImage: TwoSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        },
        {
          "paper": "Splendorgel",
          "sides": "2 Sisi",
          paperImage: BCSplendorgel,
          sideImage: TwoSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        },
        {
          "paper": "Splendorgel",
          "sides": "1 Sisi",
          paperImage: BCSplendorgel,
          sideImage: OneSide,
          paperDesc: SHORT_DESC_DUMMY,
          sideDesc: SHORT_DESC_DUMMY,
        }
      ]);
      setAddSpecs([
        {
          "type": "Potongan",
          "value": [
            {
              image: CNormal,
              name: "Normal",
              desc: SHORT_DESC_DUMMY,
            },
            {
              image: CRounded,
              name: "Rounded Corner",
              desc: SHORT_DESC_DUMMY,
            },
          ]
        },
        {
          "type": "Laminasi",
          "value": [
            {
              image: Glossy,
              name: "Glossy",
              desc: SHORT_DESC_DUMMY,
            },
            {
              image: Matte,
              name: "Matte",
              desc: SHORT_DESC_DUMMY,
            },
            {
              image: TanpaLaminasi,
              name: "Tanpa Laminasi",
              desc: SHORT_DESC_DUMMY,
            },
          ]
        }
      ]);
      setIsLoading(false);
    },
    []
  );

  return {
    location,
    bcSpecs,
    addSpecs,
    isLoading,
  };
}
