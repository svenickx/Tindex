import styled from 'styled-components';

export const Text = styled.Text`
  font-size: 20px;
`;

export const View = styled.View`
  padding: 10px;
  align-items: ${props => (props.isSender ? 'flex-start' : 'flex-end')};
`;
