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
}

const BaseTypography = styled.Text<TypographyProps>`
  margin-top: ${(props: TypographyProps) => props.marginTop};
  margin-bottom: ${(props: TypographyProps) => props.marginBottom};
  margin-left: ${(props: TypographyProps) => props.marginLeft};
  margin-right: ${(props: TypographyProps) => props.marginRight};
  text-align: ${(props: TypographyProps) => props.textAlign};
  width: ${(props: TypographyProps) => props.width};
  text-decoration-line: ${(props: TypographyProps) => props.textDecorationLine};
  color: ${(props: TypographyProps) => props.color};
  flex-shrink: 1;
`;

const Large = styled(BaseTypography)`
  font-family: Roboto-Bold;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
`;

const Medium = styled(BaseTypography)`
  font-family: Roboto-Regular;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;

const MediumHighlight = styled(BaseTypography)`
  font-family: Roboto-Medium;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;

const Small = styled(BaseTypography)`
  font-family: Roboto-Regular;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const SmallHighlight = styled(BaseTypography)`
  font-family: Roboto-Medium;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Tiny = styled(BaseTypography)`
  font-family: Roboto-Regular;
  font-size: 12px;
  line-height: 20px;
`;

const Typographies = {
  Large,
  Medium,
  MediumHighlight,
  Small,
  SmallHighlight,
  Tiny,
};

export {Typographies};
