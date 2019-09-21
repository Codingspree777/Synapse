import React from 'react';
import { Button } from 'reactstrap';
import { CREDIT_AND_DEBIT } from '../constants/enConstants';

const Accounts = ({ status, id, balance, currency, name, type }) => {
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

      {/* <Button
        color='primary'
        size='sm'
        className='viewTransaction'
        id={id}
        value={id}
        onClick={handleClick}
      >
        View Transactions
      </Button>

      <Button
        color='primary'
        size='sm'
        className='viewTransaction'
        id={id}
        value={id}
        onClick={this.handleClick2}
      >
        Create Transaction
      </Button> */}
    </div>
  );
};

export default Accounts;

// const ButtonComponent = ({
//   id,
//   buttonName,
//   handleClick,
// }) => {
//   return (
//     <Button
//       color='primary'
//       size='sm'
//       className='viewTransaction'
//       id={id}
//       value={id}
//       onClick={handleClick}
//     >
//     {buttonName}
//   </Button>
//   )
// }
