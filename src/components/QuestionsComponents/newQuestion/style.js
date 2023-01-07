import styled from 'styled-components';

export const PaddingView = styled.View`
  padding: 10px;
`;

export const TitleSmallBlack = styled.Text`
  color: ${props => props.theme.tertiary};
  font-size: 18px;
`;

export const Modal = styled.View`
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ActionBtns = styled.View`
  flex-direction: row;
  display: flex;
`;

export const ActionBtn = styled.Button`
  color: ${props => props.color};
  margin: 10px;
`;
