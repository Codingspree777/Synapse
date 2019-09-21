import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const CreateTransaction = ({toRecipientID, changeType, changeAmt, changeCurr}) => {
  return (
    <div>
      <h1>Fill in requried fields</h1>
      <div>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>To:</InputGroupAddon>
          <Input onChange={toRecipientID} placeholder='User ID' />
          <InputGroupAddon addonType='prepend'>
            Type of Account?:
          </InputGroupAddon>
          <Input placeholder='DEPOSIT-US' onChange={changeType} />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
          <Input
            placeholder='Amount (min $5)'
            min={5}
            max={1000000}
            type='number'
            step='1'
            onChange={changeAmt}
          />
          <InputGroupAddon addonType='append'>.00</InputGroupAddon>
          <InputGroupAddon addonType='prepend'>Currency:</InputGroupAddon>
          <Input onChange={changeCurr} placeholder='USD' />
        </InputGroup>
      </div>
    </div>
  );
};

export default CreateTransaction;
