import React from 'react';
import {CenteredView, Text} from './style';

const CenteredText = ({title}) => {
  return (
    <CenteredView>
      <Text>{title}</Text>
    </CenteredView>
  );
};

export default CenteredText;
