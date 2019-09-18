import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const CreateTransaction = props => {
  
  return (
    <div>
      <h1>Fill in requried fields</h1>
      <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend" to={props.to}>To:</InputGroupAddon>
        <Input placeholder="User ID" />
        <InputGroupAddon addonType="prepend" type={props.type}>Type of Account?:</InputGroupAddon>
        <Input placeholder="DEPOSIT-US" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount (min $5)" min={5} max={1000000} type="number" step="1" amount={props.amount}/>
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
        <InputGroupAddon addonType="prepend" curr={props.curr}>Curr?:</InputGroupAddon>
        <Input placeholder="USD" />
      </InputGroup>
    </div>
    </div>
  );
};

export default CreateTransaction ;
