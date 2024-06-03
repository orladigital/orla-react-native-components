import React, { type FC, type ReactNode } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import * as Styles from './styles';

export interface ButtonProps {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  backgroundColor?: string;
  variant?: 'FilledButton' | 'BorderButton' | 'Button';
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  activityColor?: string;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  justifyContent,
  alignItems,
  flexDirection,
  width,
  height,
  minHeight,
  borderRadius,
  borderWidth,
  borderColor,
  backgroundColor,
  variant = 'FilledButton',
  disabled = false,
  isLoading = false,
  onPress = () => {},
  onPressIn = () => {},
  onPressOut = () => {},
  activityColor,
  children,
}) => {
  const Element = Styles.Buttons[variant];

  const activityIndicatorSize = Platform.OS === 'ios' ? 'small' : 'large';

  return (
    <Element
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      width={width}
      height={height}
      minHeight={minHeight}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      disabled={isLoading || disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      {isLoading ? (
        <Styles.ActivityContainer>
          <ActivityIndicator
            size={activityIndicatorSize}
            color={activityColor}
          />
        </Styles.ActivityContainer>
      ) : (
        children
      )}
    </Element>
  );
};

export default Button;
