import React from 'react';
import { CREDIT_AND_DEBIT } from '../constants/enConstants';
import CreateButtons from '../components/buttons';

const Accounts = ({
  status,
  id,
  balance,
  currency,
  name,
  account_type,
  description,
  onClick,
  value,
  onClick2,
  description2
}) => {
  const style = {
    color: status === CREDIT_AND_DEBIT ? 'green' : 'red'
  };

  return (
    <div className='accounts'>
      <ul>
        <li className='list' id={id}>
          Your '{name}' has a balance of {balance} {currency}
        </li>
        <li className='list2' id={id} style={style}>
          Acc. Type: {account_type} Status: {status}
        </li>
      </ul>
      <CreateButtons
        onClick={onClick}
        value={value}
        description={description}
        size='sm'
      />
      <CreateButtons
        onClick={onClick2}
        value={value}
        description={description2}
        size='sm'
      />
    </div>
  );
};

export default Accounts;
