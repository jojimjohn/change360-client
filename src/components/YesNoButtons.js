import React from 'react';
import { Button } from '@mui/material';

const YesNoButtons = ({ handleResponse }) => {
  return (
    <>
      <Button onClick={() => handleResponse('yes')}>
        Yes
      </Button>
      <Button onClick={() => handleResponse('no')}>
        No
      </Button>
    </>
  );
}

export default YesNoButtons;
