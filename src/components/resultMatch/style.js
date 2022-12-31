import styled from 'styled-components';
import {
  MAIN_COLOR,
  TITLE_COLOR_PRIMARY,
  TITLE_COLOR_SECONDARY,
} from 'react-native-dotenv';

export const PaddingView = styled.View`
  padding: 10px;
`;

export const TitleBlack = styled.Text`
  color: ${TITLE_COLOR_SECONDARY};
  font-size: 25px;
  font-weight: bold;
`;

export const SidePaddingView = styled.View`
  padding: 20px 60px;
`;
