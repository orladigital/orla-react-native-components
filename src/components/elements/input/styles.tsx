import styled from 'styled-components/native';

interface ContainerProps {
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  marginRight?: string;
}

interface ViewContainerProps {
  flexDirection?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  height?: string;
  width?: string;
  borderColor?: string;
  borderWidth?: string;
  borderTopLeftRadius?: string;
  borderBottomLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
  alignContent?: string;
}

interface InputProps {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const Container = styled.View<ContainerProps>`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
`;

export const InputView = styled.View<ViewContainerProps>`
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom}`};
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}`};
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ borderColor }) => borderColor && `border-color: ${borderColor}`};
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}`};
  ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius && `border-top-left-radius: ${borderTopLeftRadius}`};
  ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius &&
    `border-bottom-left-radius: ${borderBottomLeftRadius}`};
  ${({ borderTopRightRadius }) =>
    borderTopRightRadius && `border-top-right-radius: ${borderTopRightRadius}`};
  ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius &&
    `border-bottom-right-radius: ${borderBottomRightRadius}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  height: 100%;
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  ${({ color }) => color && `color: ${color}`};
`;
