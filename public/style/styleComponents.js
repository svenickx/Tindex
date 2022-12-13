import styled from 'styled-components';

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
