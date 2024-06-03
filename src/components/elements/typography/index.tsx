import React, {FC, ReactNode} from 'react';

import colors from 'constants/colors';

import * as Styles from './styles';

interface TypographyProps {
  variant?:
    | 'Large'
    | 'Medium'
    | 'MediumHighlight'
    | 'Small'
    | 'SmallHighlight'
    | 'Tiny';
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  textAlign?: string;
  numberOfLines?: number;
  textDecorationLine?: string;
  children: ReactNode;
}

const Typography: FC<TypographyProps> = ({
  variant = 'Medium',
  color = colors.textColor,
  marginTop = '0px',
  marginBottom = '0px',
  marginLeft = '0px',
  marginRight = '0px',
  width = 'auto',
  textAlign = 'left',
  numberOfLines = 0,
  textDecorationLine = 'none',
  children,
}) => {
  const Element = Styles.Typographies[variant];

  return (
    <Element
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      numberOfLines={numberOfLines}
      textAlign={textAlign}
      width={width}
      textDecorationLine={textDecorationLine}>
      {children}
    </Element>
  );
};

export default Typography;
