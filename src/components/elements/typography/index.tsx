import React, { type FC, type ReactNode } from 'react';

import * as Styles from './styles';

export interface TypographyProps {
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
  width?: string;
  textDecorationLine?: string;
  flexShrink?: number;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  numberOfLines?: number;
  children: ReactNode;
}

const Typography: FC<TypographyProps> = ({
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  textAlign,
  width,
  textDecorationLine,
  flexShrink,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  numberOfLines,
  children,
}) => {
  return (
    <Styles.Typography
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      textAlign={textAlign}
      width={width}
      textDecorationLine={textDecorationLine}
      flexShrink={flexShrink}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      numberOfLines={numberOfLines}
    >
      {children}
    </Styles.Typography>
  );
};

export default Typography;
