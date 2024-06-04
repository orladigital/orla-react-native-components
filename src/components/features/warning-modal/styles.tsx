import styled from 'styled-components/native';

interface ShadowInterface {
  backgroundColor?: string;
  padding?: string;
  alignItems?: string;
  justifyContent?: string;
  flex?: string;
}

interface ContainerInterface {
  padding?: string;
  maxHeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

interface ButtonContainerInterface {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  flexDirection?: string;
  width?: string;
  justifyContent?: string;
}

export const ModalPicker = styled.Modal``;

export const Shadow = styled.TouchableOpacity<ShadowInterface>`
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  padding: 16px;
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ flex }) => flex && `flex: ${flex}`};
`;

export const Container = styled.View<ContainerInterface>`
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}`};
`;

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerInterface>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
`;
