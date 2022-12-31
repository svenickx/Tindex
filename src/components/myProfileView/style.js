import styled from 'styled-components';
import {TITLE_COLOR_SECONDARY} from 'react-native-dotenv';

export const PaddingView = styled.View`
  padding: 10px;
`;

export const TitleBlack = styled.Text`
  color: ${TITLE_COLOR_SECONDARY};
  font-size: 25px;
  font-weight: bold;
`;

export const DescriptionBlack = styled.Text`
  color: black;
  font-size: 18px;
`;
