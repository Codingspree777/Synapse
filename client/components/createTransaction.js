import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const CreateTransaction = ({
  toRecipientID,
  changeType,
  changeAmt,
  changeCurr,
  submit
}) => {
  return (
    <div className='create-form'>
      <p className='box-header'>Fill in requried fields</p>
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
        <Button
          color='primary'
          className='goback_button'
          id='submit'
          onClick={submit}
        >
          Submit
        </Button>
    </div>
  );
};

export default CreateTransaction;
