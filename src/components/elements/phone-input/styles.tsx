import styled from 'styled-components/native';

interface ContainerProps {
  marginTop?: string;
  marginBottom?: string;
  marginRight?: string;
  marginLeft?: string;
}

interface InputContainerInterface {
  borderColor?: string;
  height?: string;
  flex?: string;
  flexDirection?: string;
  borderWidth?: string;
  alignItems?: string;
  padding?: string;
  borderRadius?: string;
}

export const Container = styled.View<ContainerProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}`};
`;

export const InputContainer = styled.View<InputContainerInterface>`
  ${({ borderColor }) => borderColor && `border-color: ${borderColor}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
`;
