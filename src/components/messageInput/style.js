import styled from 'styled-components';
import {MAIN_COLOR} from 'react-native-dotenv';

export const MessageInputView = styled.View`
  height: 80px;
  width: 100%;
  background-color: ${MAIN_COLOR};
  position: absolute;
  bottom: 0;
  flex-direction: row;
  padding: 20px 10px 10px 10px;
`;

export const MessageTextInput = styled.TextInput`
  height: 40px;
  width: 255px;
  background-color: white;
  border-radius: 10px;
  margin: 0 15px 0 10px;
`;
