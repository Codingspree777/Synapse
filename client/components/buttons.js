import { Button } from 'reactstrap';
import React from 'react';

import {
  USER_LOGOUT,
  USER_NAVIGATE,
} from '../constants/enConstants';

const CreateButtons = ({ type, description, onClick, value, size }) => {
  if (type === USER_LOGOUT) {
    type = USER_LOGOUT;
  } else {
    type = USER_NAVIGATE;
  } 
  return (
    <Button color={type} className='button' onClick={onClick} value={value} size='sm'>
      {description}
    </Button>
  );
};

export default CreateButtons;
