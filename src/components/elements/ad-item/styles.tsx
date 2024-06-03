import styled from 'styled-components/native';

interface ContainerProps {
  width?: string;
  height?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
}

export const Container = styled.View<ContainerProps>`
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
`;
