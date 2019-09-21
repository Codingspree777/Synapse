import React from 'react';
import { CREDIT_AND_DEBIT } from '../constants/enConstants';
import CreateButtons from '../components/buttons';

const Accounts = ({ status, id, balance, currency, name, type, onClick, value}) => {
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
          Acc. Type: {type} Status: {status}
        </li>
      </ul>
      <CreateButtons onClick={onClick} value={value}/>
    </div>
  );
};

export default Accounts;

