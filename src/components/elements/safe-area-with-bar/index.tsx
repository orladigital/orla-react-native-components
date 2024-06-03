import React, {ReactNode} from 'react';
import {ViewStyle, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface SafeAreaWithBarProps {
  color?: string;
  children: ReactNode;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const SafeAreaWithBar: React.FC<SafeAreaWithBarProps> = ({
  color,
  children,
  barStyle,
}) => {
  const styles: {container: ViewStyle} = {
    container: {flex: 1},
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={color}
        barStyle={barStyle}
      />
      {children}
    </SafeAreaView>
  );
};

SafeAreaWithBar.defaultProps = {
  barStyle: 'light-content',
  color: 'transparent',
};

export default SafeAreaWithBar;
