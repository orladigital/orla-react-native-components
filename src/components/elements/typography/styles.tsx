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
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => width};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine};
  ${({ color }) => `color: ${color}`};
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink}`};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
`;
