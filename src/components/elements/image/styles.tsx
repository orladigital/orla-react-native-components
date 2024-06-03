import styled from 'styled-components/native';

interface ImageProps {
  height?: string | number;
  width?: string | number;
}

export const Image = styled.Image<ImageProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
