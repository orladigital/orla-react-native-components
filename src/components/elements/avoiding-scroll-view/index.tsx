import React, { type ReactNode, type FC } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface AvoidingScrollViewProps {
  children: ReactNode;
}

const AvoidingScrollView: FC<AvoidingScrollViewProps> = ({ children }) => {
  const contentContainer = { flexGrow: 1 };
  const container = { flexGrow: 1 };

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
