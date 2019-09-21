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

const CreateButtons = ({ type, path, description, push}) => {
  if (type === USER_LOGOUT) {
    type = USER_LOGOUT;
  } else {
    type = USER_NAVIGATE;
  } 
  return (
    <Button color={type} className='button' onClick={push}>
      {description}
    </Button>
  );
};

export default CreateButtons;
