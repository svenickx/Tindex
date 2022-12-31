import styled from 'styled-components';

export const LoginInputView = styled.View`
  flex: 1;
`;
export const LoginButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  border-radius: 10px;
  padding: 10px 12px;
  width: 70%;
`;
export const LoginButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  color: ${props => props.theme.secondary};
`;
export const LoginButtonView = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
