import React, { type FC } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import type { IAvoidingScrollViewProps } from '../../../types';

const AvoidingScrollView: FC<IAvoidingScrollViewProps> = ({
  children,
  contentContainer,
  container,
}) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={contentContainer}
      showsVerticalScrollIndicator={false}
      style={container}
      enableOnAndroid
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default AvoidingScrollView;
