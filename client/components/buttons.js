import { Button } from 'reactstrap';
import React from 'react';

import {
  USER_LOGOUT,
  USER_NAVIGATE,
  BUTTON_LOGOUT,
  BUTTON_VIEW_ACCOUNTS,
  BUTTON_GO_BACK
} from '../constants/enConstants';
import { USER_PAGE } from '../constants/pathConstants';

const CreateButtons = ({ type, description, onClick, value }) => {
  if (type === USER_LOGOUT) {
    type = USER_LOGOUT;
  } else {
    type = USER_NAVIGATE;
  } 
  return (
    <Button color={type} className='button' onClick={onClick} value={value}>
      {description}
    </Button>
  );
};

export default CreateButtons;
