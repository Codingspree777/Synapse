import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Transactions = props => {
  let style;
  if (props.status === 'SETTLED') {
    style = {
      color: 'green'
    };
  } else {
    style = {
      color: 'red'
    };
  }
  return (
    <div>
      <Container fluid style={{ lineHeight: '40px' }}>
        <Row className='rowContent'>
          <Col  debug>{props.id}</Col>
          <Col  debug>{props.from}</Col>
          <Col  debug>{props.to}</Col>
          <Col  debug>{props.amount} {props.curr}</Col>
          <Col  style={style} debug>{props.status}</Col>
          <Col  debug>{props.date}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Transactions;
