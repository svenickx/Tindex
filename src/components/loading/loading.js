import React from 'react';
import {ActivityIndicator} from 'react-native';
import {CenteredView} from './style';
import {useTheme} from 'styled-components';

const Loading = () => {
  const theme = useTheme();

  return (
    <CenteredView>
      <ActivityIndicator size="large" color={theme.primary} />
    </CenteredView>
  );
};

export default Loading;
