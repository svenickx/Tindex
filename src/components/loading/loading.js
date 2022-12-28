import React from 'react';
import {ActivityIndicator} from 'react-native';
import {CenteredView} from './style';
import {MAIN_COLOR} from 'react-native-dotenv';

const Loading = () => {
  return (
    <CenteredView>
      <ActivityIndicator size="large" color={MAIN_COLOR} />
    </CenteredView>
  );
};

export default Loading;
