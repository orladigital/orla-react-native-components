import styled from 'styled-components/native';

interface TypographyProps {
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
  width?: string;
  textDecorationLine?: string;
  numberOfLines?: number;
  flexShrink?: number;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: number;
}

export const Typography = styled.Text<TypographyProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ textDecorationLine }) =>
    textDecorationLine && `text-decoration-line: ${textDecorationLine}`};
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink}`};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
`;
