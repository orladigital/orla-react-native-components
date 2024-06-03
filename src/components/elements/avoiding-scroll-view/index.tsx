import React, { type ReactNode, type FC } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface AvoidingScrollViewProps {
  children: ReactNode;
  contentContainer: { [key: string]: string | number };
  container: { [key: string]: string | number };
}

const AvoidingScrollView: FC<AvoidingScrollViewProps> = ({
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
