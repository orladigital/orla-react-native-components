import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { ISafeAreaWithBarProps } from '../../../types';

const SafeAreaWithBar: React.FC<ISafeAreaWithBarProps> = ({
  color,
  children,
  barStyle,
  containerStyle,
}) => {
  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar
        translucent={true}
        backgroundColor={color}
        barStyle={barStyle}
      />
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWithBar;
