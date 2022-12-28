import styled from 'styled-components';
import {MAIN_COLOR, TITLE_COLOR_PRIMARY} from 'react-native-dotenv';

export const LoginInputView = styled.View`
  flex: 1;
`;
export const LoginButton = styled.TouchableOpacity`
  background-color: ${MAIN_COLOR};
  border-radius: 10px;
  padding: 10px 12px;
  width: 70%;
`;
export const LoginButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  color: ${TITLE_COLOR_PRIMARY};
`;
export const LoginButtonView = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
