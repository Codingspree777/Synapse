import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { SETTLED } from '../constants/enConstants';

const Transactions = ({ id, from, to, amount, currency, status, date }) => {
  const style = {
    color: status === SETTLED ? 'green' : 'red'
  };
  return (
    <div>
      <Container fluid style={{ lineHeight: '40px' }}>
        <Row className='row-content'>
          <Col debug>{id}</Col>
          <Col debug>{from}</Col>
          <Col debug>{to}</Col>
          <Col debug>
            {amount} {currency}
          </Col>
          <Col style={style} debug>
            {status}
          </Col>
          <Col debug>{date}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Transactions;
