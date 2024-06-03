import styled from 'styled-components/native';

interface InputContainerInterface {
  borderColor: string;
}

export const Container = styled.View`
  margin-top: 16px;
`;

export const InputContainer = styled.View<InputContainerInterface>`
  height: 48px;
  flex-direction: row;
  flex: 1;
  border-color: ${({ borderColor }) => borderColor};
  border-width: 1px;
  align-items: center;
  padding: 0px 16px;
  border-radius: 24px;
`;
