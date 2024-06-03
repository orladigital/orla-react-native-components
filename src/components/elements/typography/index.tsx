import React, { type FC, type ReactNode } from 'react';

import * as Styles from './styles';

export interface TypographyProps {
  color: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  textAlign?: string;
  numberOfLines?: number;
  textDecorationLine?: string;
  flexShrink: number;
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
  children: ReactNode;
}

const Typography: FC<TypographyProps> = ({
  color,
  marginTop = '0px',
  marginBottom = '0px',
  marginLeft = '0px',
  marginRight = '0px',
  width = 'auto',
  textAlign = 'left',
  numberOfLines = 0,
  textDecorationLine = 'none',
  flexShrink,
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  children,
}) => {
  return (
    <Styles.Typography
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      numberOfLines={numberOfLines}
      textAlign={textAlign}
      width={width}
      textDecorationLine={textDecorationLine}
      flexShrink={flexShrink}
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
    >
      {children}
    </Styles.Typography>
  );
};

export default Typography;
