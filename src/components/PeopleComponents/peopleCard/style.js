import styled from 'styled-components';

export const Card = styled.TouchableOpacity`
  height: 500px;
  width: 400px;
  background-color: black;
  border-color: black;
  position: relative;
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
  color: ${props => props.theme.secondary};
`;

export const DescriptionWhite = styled.Text`
  color: white;
  font-size: 18px;
  padding: 0 0 10px 0;
`;
