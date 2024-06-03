import styled from 'styled-components/native';

interface ContainerProps {
  borderColor: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: fit-content;
  padding: 16px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 16px;
  margin-bottom: 16px;
`;
