import React, { type FC } from 'react';

import type { ITypographyProps } from '../../../types';

import * as Styles from './styles';

const Typography: FC<ITypographyProps> = ({
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
