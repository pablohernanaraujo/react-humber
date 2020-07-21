import React, { FunctionComponent } from 'react';
import { format } from 'date-fns';

import styled from 'Theme/styled-components';
import { LoadsInterface, Status, ABIERTA } from '../../api/mock';

const WrapperRow = styled.div<{ status: Status }>`
  border-bottom: 1px solid
    ${({ status }) => (status === ABIERTA ? 'green' : 'red')};
  padding: 10px 0px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.Palette.greyBlue[500]};
  font-size: 16px;
  line-height: 30px;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.Palette.greyBlue[500]};
  opacity: ${({ theme }) => theme.Emphasis.medium};
  font-size: 16px;
  line-height: 30px;
`;

export const Table: FunctionComponent<{ item: LoadsInterface }> = ({
  item,
}) => {
  const { origin, destination, loadType, loadDate, status } = item;

  return (
    <WrapperRow status={status}>
      <Row>
        <Title>Origen:</Title>
        <Description>{origin}</Description>
      </Row>
      <Row>
        <Title>Destino:</Title>
        <Description>{destination}</Description>
      </Row>
      <Row>
        <Title>Tipo de carga:</Title>
        <Description>{loadType}</Description>
      </Row>
      <Row>
        <Title>Fecha de llegada:</Title>
        <Description>{format(loadDate, 'd MMM Y')}</Description>
      </Row>
    </WrapperRow>
  );
};
