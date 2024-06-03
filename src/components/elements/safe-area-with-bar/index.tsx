import React, { type ReactNode } from 'react';
import { type ViewStyle, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface SafeAreaWithBarProps {
  color?: string;
  children: ReactNode;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  containerStyle: ViewStyle;
}

const SafeAreaWithBar: React.FC<SafeAreaWithBarProps> = ({
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
