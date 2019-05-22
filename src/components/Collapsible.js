import React from 'react';

import { animated, useSpring } from 'react-spring';

import styled from 'styled-components';

import useMeasure from '../hooks/useMeasure';

export default function Collapsible(props) {
  const [measureBindings, bounds] = useMeasure();

  const containerStyling = useSpring({
    maxHeight: props.collapse ? 0 : bounds.height,
  });

  return (
    <Container style={containerStyling}>
      <ContentWrapper {...measureBindings}>
        {props.children}
      </ContentWrapper>
    </Container>
  );
}

const Container = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  overflow: hidden;
`;
