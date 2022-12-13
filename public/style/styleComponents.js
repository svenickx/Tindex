import styled from 'styled-components';

export const CenteredView = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity`
  height: 500px;
  width: 400px;
  background-color: black;
  border-color: black;
  border-width: 1px;
  position: relative;
`;

export const CardImage = styled.Image`
  height: 500px;
  width: 400px;
  background-color: black;
`;

export const CardTitle = styled.View`
  position: absolute;
  background-color: rgba(52, 52, 52, 0.8);
  height: 120px;
  width: 400px;
  z-index: 4;
  bottom: 0;
`;

export const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const SplashView = styled.View`
  height: 90%;
`;
export const SplashLogoView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const SplashLogoImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const LoginInputView = styled.View`
  flex: 1;
`;
export const LoginButton = styled.TouchableOpacity`
  background-color: #e83d95;
  border-radius: 10px;
  padding: 10px 12px;
  width: 70%;
`;
export const LoginButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
  color: white;
`;
export const LoginButtonView = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
