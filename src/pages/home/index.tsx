import React, { FunctionComponent, useState, useEffect } from 'react';

import styled from 'Theme/styled-components';
import { Wrapper } from 'Ui/wrapper';
import { loads, ABIERTA, CERRADA, Status } from '../../api/mock';
import { Table } from './table';

const ContainerTable = styled.div`
  display: flex;
`;

const WrapperTable = styled.div`
  width: 50%;
  padding: 0px 10px;
`;

const Home: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <p>Cargando</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ContainerTable>
        <WrapperTable>
          <h2>Cargas abiertas</h2>
          {loads.map(
            (load) =>
              load.status === ABIERTA && <Table key={load.id} item={load} />,
          )}
        </WrapperTable>
        <WrapperTable>
          <h2>Cargas cerradas</h2>
          {loads.map(
            (load) =>
              load.status === CERRADA && <Table key={load.id} item={load} />,
          )}
        </WrapperTable>
      </ContainerTable>
    </Wrapper>
  );
};

export default Home;
