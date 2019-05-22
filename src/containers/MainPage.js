import React, { useState } from 'react';
import styled from 'styled-components';

import Collapsible from '../components/Collapsible';

import { useFetchBCData } from '../hooks/useBCApi';

export default function MainPage(props) {
  const { setCurrentFocus } = props;

  const [activeStep, setActiveStep] = useState('paperType');
  const [paperType, setPaperType] = useState('');
  const [sideType, setSideType] = useState('');
  const [cutType, setCutType] = useState('');
  const [finishingType, setFinishingType] = useState('');

  const { bcSpecs, addSpecs } = useFetchBCData();

  return (
    <Container>
      <SelectPaperType
        setCurrentFocus={setCurrentFocus}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        paperType={paperType}
        setPaperType={setPaperType}
        bcSpecs={bcSpecs}
      />
      <SelectSideType
        setCurrentFocus={setCurrentFocus}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        paperType={paperType}
        sideType={sideType}
        setSideType={setSideType}
        bcSpecs={bcSpecs}
      />
      <SelectCutType
        setCurrentFocus={setCurrentFocus}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        sideType={sideType}
        cutType={cutType}
        setCutType={setCutType}
        addSpecs={addSpecs}
      />
      <SelectFinishingType
        setCurrentFocus={setCurrentFocus}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        cutType={cutType}
        finishingType={finishingType}
        setFinishingType={setFinishingType}
        addSpecs={addSpecs}
      />
    </Container>
  );
}

function SelectPaperType(props) {
  const {
    setCurrentFocus,
    activeStep,
    setActiveStep,
    paperType,
    setPaperType,
    bcSpecs,
  } = props;

  const paperBcSpecMap = [];

  return (
    <React.Fragment>
      <StepToggler
        onClick={() => {
          setCurrentFocus('selectSpec');
          setActiveStep('paperType');
        }}
      >
        <span className="stepTitle">Jenis Kertas</span>
        {paperType && (<span className="stepValue">{paperType}</span>)}
        {paperType && (<span className="stepChange">Ubah</span>)}
      </StepToggler>
      <Collapsible collapse={activeStep !== 'paperType'}>
        <ProductContainer>
          {bcSpecs.filter(bcSpec => {
            if (paperBcSpecMap.indexOf(bcSpec.paper) === -1) {
              paperBcSpecMap.push(bcSpec.paper);
              
              return true;
            }

            return false;
          }).map((bcSpec) => (
            <ProductCard onClick={() => {
                setPaperType(bcSpec.paper);
                setActiveStep('sideType');
              }}>
              <img src={bcSpec.paperImage} alt={`Jenis Kertas ${bcSpec.paper}`} />
              <div>
                <h1>{bcSpec.paper}</h1>
                <p>{bcSpec.paperDesc}</p>
                <div>Pilih</div>
              </div>
            </ProductCard>
          ))}
        </ProductContainer>
      </Collapsible>
    </React.Fragment>
  );
}

function SelectSideType(props) {
  const {
    setCurrentFocus,
    activeStep,
    setActiveStep,
    paperType,
    sideType,
    setSideType,
    bcSpecs,
  } = props;

  return (
    <React.Fragment>
      <StepToggler 
        onClick={() => {
          setCurrentFocus('selectSpec');
          setActiveStep('sideType');
        }}
        disabled={!paperType}
      >
        <span className="stepTitle">Jumlah Sisi</span>
        {sideType && (<span className="stepValue">{sideType}</span>)}
        {sideType && (<span className="stepChange">Ubah</span>)}
      </StepToggler>
      <Collapsible collapse={activeStep !== 'sideType'}>
        <ProductContainer>
          {bcSpecs.filter(bcSpec => (bcSpec.paper === paperType)).map((bcSpec) => (
            <ProductCard onClick={() => {
              setSideType(bcSpec.sides);
              setActiveStep('cutType');
            }}>
              <img src={bcSpec.sideImage} alt={`Jenis Sisi ${bcSpec.sides}`} />
              <div>
                <h1>{bcSpec.sides}</h1>
                <p>{bcSpec.sideDesc}</p>
                <div>Pilih</div>
              </div>
            </ProductCard>
          ))}
        </ProductContainer>
      </Collapsible>
    </React.Fragment>
  );
}

function SelectCutType(props) {
  const {
    setCurrentFocus,
    activeStep,
    setActiveStep,
    sideType,
    cutType,
    setCutType,
    addSpecs,
  } = props;

  return (
    <React.Fragment>
      <StepToggler 
        onClick={() => {
          setCurrentFocus('selectSpec');
          setActiveStep('cutType');
        }}
        disabled={!sideType}
      >
        <span className="stepTitle">Jenis Potongan</span>
        {cutType && (<span className="stepValue">{cutType}</span>)}
        {cutType && (<span className="stepChange">Ubah</span>)}
      </StepToggler>
      <Collapsible collapse={activeStep !== 'cutType'}>
        <ProductContainer>
          {addSpecs.find(addSpec => (addSpec.type === 'Potongan')) &&
            addSpecs.find(addSpec => (addSpec.type === 'Potongan')).value.map((cutSpec) => (
              <ProductCard onClick={() => {
                setCutType(cutSpec.name);
                setActiveStep('finishingType');
              }}>
                <img src={cutSpec.image} alt={`Jenis Potongan ${cutSpec.name}`} />
                <div>
                  <h1>{cutSpec.name}</h1>
                  <p>{cutSpec.desc}</p>
                  <div>Pilih</div>
                </div>
              </ProductCard>
            ))}
        </ProductContainer>
      </Collapsible>
    </React.Fragment>
  );
}

function SelectFinishingType(props) {
  const {
    setCurrentFocus,
    activeStep,
    setActiveStep,
    cutType,
    finishingType,
    setFinishingType,
    addSpecs,
  } = props;

  return (
    <React.Fragment>
      <StepToggler 
        onClick={() => {
          setCurrentFocus('selectSpec');
          setActiveStep('finishingType');
        }}
        disabled={!cutType}
      >
        <span className="stepTitle">Jenis Finishing</span>
        {finishingType && (<span className="stepValue">{finishingType}</span>)}
        {finishingType && (<span className="stepChange">Ubah</span>)}
      </StepToggler>
      <Collapsible collapse={activeStep !== 'finishingType'}>
        <ProductContainer>
          {addSpecs.find(addSpec => (addSpec.type === 'Laminasi')) &&
            addSpecs.find(addSpec => (addSpec.type === 'Laminasi')).value.map((finishingSpec) => (
              <ProductCard onClick={() => {
                setFinishingType(finishingSpec.name);
                setActiveStep('Done');
                setCurrentFocus('displayPrice');
              }}>
                <img src={finishingSpec.image} alt={`Jenis Finishing ${finishingSpec.name}`} />
                <div>
                  <h1>{finishingSpec.name}</h1>
                  <p>{finishingSpec.desc}</p>
                  <div>Pilih</div>
                </div>
              </ProductCard>
            ))}
        </ProductContainer>
      </Collapsible>
    </React.Fragment>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 40rem) {
    padding: 1rem;
  }
`;

const StepToggler = styled.button`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 1rem 0;
  border: none;
  border-bottom: 0.1rem solid ${props => props.disabled ? '#CCC' : '#1977d2'};
  outline: none;
  cursor: pointer;

  &:hover {
    cursor: pointer;

    .stepChange {
      background: #1977d2;
      color: #fff;
      transition: 0.25s ease all;
    }
  }

  .stepTitle {
    color: ${props => props.disabled ? '#CCC' : '#000'};
    flex: 1;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 1rem 0 0;
  }

  .stepValue {
    color: ${props => props.disabled ? '#CCC' : '#000'};
    font-size: 1.25rem;
    font-weight: 700;
    text-align: left;
    margin-right: 0.5rem;
  }

  .stepChange {
    display: flex;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 0.75rem;
    border: 0.1rem solid #1977d2;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    transition: 0.25s ease all;
    background: #fff;
    color: #1977d2;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
`;

const ProductCard = styled.button`
  width: calc(50% - 1rem);
  margin: 1rem 0;
  padding: 0;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  @media screen and (max-width: 40rem) {
    width: 100%;
  }

  &:hover {
    div {
      div {
        background: #1977d2;
        color: #fff;
        transition: 0.25s ease all;
      }
    }
  }

  img {
    width: 50%;
    max-height: 15rem;
    object-fit: cover;
    margin-right: 1rem;

    @media screen and (max-width: 40rem) {
      width: 100%;
    }
  }

  div {
    flex: 1;
    display: flex;
    flex-flow: wrap row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    padding: 1rem 0;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      text-align: left;
      margin: 0 0 1rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 400;
      text-align: left;
      margin: 0;
    }

    div {
      width: 100%;
      margin: 1rem 0 0;
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
      transition: 0.25s ease all;
      font-weight: 700;
    }
  }
`;

