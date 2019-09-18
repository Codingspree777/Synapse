import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const CreateTransaction = props => {
  
  return (
    <div>
      <h1>create</h1>
      <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">To:</InputGroupAddon>
        <Input placeholder="User ID" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </div>
    </div>
  );
};

export default CreateTransaction ;
