import styled from 'styled-components';
import {
  MAIN_COLOR,
  TITLE_COLOR_PRIMARY,
  TITLE_COLOR_SECONDARY,
} from 'react-native-dotenv';

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
  width: 400px;
  z-index: 4;
  padding: 10px;
  bottom: 0;
`;

export const TitleWhite = styled.Text`
  padding-bottom: 10px;
  font-size: 30px;
  color: ${TITLE_COLOR_PRIMARY};
`;
export const TitleBlack = styled.Text`
  color: ${TITLE_COLOR_SECONDARY};
  font-size: 25px;
  font-weight: bold;
`;
export const TitleSmallBlack = styled.Text`
  color: ${TITLE_COLOR_SECONDARY};
  font-size: 18px;
`;
export const DescriptionWhite = styled.Text`
  color: white;
  font-size: 18px;
  padding: 0 0 10px 0;
`;
export const DescriptionBlack = styled.Text`
  color: black;
  font-size: 18px;
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

export const PickerFalseResponse = styled.View`
  background-color: red;
`;
export const PickerGoodResponse = styled.View`
  background-color: lightgreen;
`;

export const PaddingView = styled.View`
  padding: 10px;
`;
export const SidePaddingView = styled.View`
  padding: 20px 60px;
`;

export const HeaderView = styled.View`
  padding: 10px 0;
  align-items: center;
`;

export const HeaderImage = styled.Image`
  height: 50px;
  width: 200px;
  border-radius: 5px;
`;
