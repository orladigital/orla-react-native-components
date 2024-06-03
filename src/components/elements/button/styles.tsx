import styled from 'styled-components/native';
import { type TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

interface ButtonWithColorProps extends ButtonProps {
  width?: string;
  height?: string;
  minHeight?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const BaseButton = styled.TouchableOpacity<ButtonProps>`
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    (marginTop || marginRight || marginBottom || marginLeft) &&
    `margin: ${marginTop || '0'} ${marginRight || '0'} ${marginBottom || '0'} ${marginLeft || '0'}`};
  ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    (paddingTop || paddingRight || paddingBottom || paddingLeft) &&
    `padding: ${paddingTop || '0'} ${paddingRight || '0'} ${paddingBottom || '0'} ${paddingLeft || '0'}`};
`;

const FilledButton = styled(BaseButton)<ButtonWithColorProps>`
  ${({ borderRadius }) => borderRadius && `border-radius:  ${borderRadius}`};
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}`};
  ${({ borderColor }) => borderColor && `border-color: ${borderColor}`};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};
`;

const BorderButton = styled(BaseButton)<ButtonWithColorProps>`
  ${({ borderRadius }) => borderRadius && `border-radius:  ${borderRadius}`};
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}`};
  ${({ borderColor }) => borderColor && `border-color: ${borderColor}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};
`;

const ActivityContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled(BaseButton)``;

const Buttons = {
  FilledButton,
  BorderButton,
  Button,
};

export { Buttons, ActivityContainer };
