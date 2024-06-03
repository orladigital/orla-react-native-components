import React, { type FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import * as Styles from './styles';

export interface SafeAreaProps {
  backgroundColor?: string;
  children: Element;
  shouldAddTopPadding?: boolean;
  shouldAddLeftPadding?: boolean;
  shouldAddRightPadding?: boolean;
  shouldAddBottomPadding?: boolean;
}

const SafeArea: FC<SafeAreaProps> = ({
  backgroundColor,
  children,
  shouldAddTopPadding = true,
  shouldAddLeftPadding = true,
  shouldAddRightPadding = true,
  shouldAddBottomPadding = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Styles.SafeArea
      paddingTop={shouldAddTopPadding ? insets.top : 0}
      paddingLeft={shouldAddLeftPadding ? insets.left : 0}
      paddingRight={shouldAddRightPadding ? insets.right : 0}
      paddingBottom={shouldAddBottomPadding ? insets.bottom : 0}
      backgroundColor={backgroundColor}
    >
      {children}
    </Styles.SafeArea>
  );
};

export default SafeArea;
