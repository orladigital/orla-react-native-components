import React, { type FC, type ReactNode } from 'react';
import { ActivityIndicator, Platform } from 'react-native';

import * as Styles from './styles';

export interface ButtonProps {
  children?: ReactNode;
  onPress?: () => void;
  variant?: 'FilledButton' | 'BorderButton' | 'Button';
  disabled?: boolean;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
  isLoading?: boolean;
  justifyContent?: string;
  alignItems?: string;
  onPressIn?: () => void;
  onPressOut?: () => void;
  activityColor: string;
  disabledColor: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'FilledButton',
  onPress = () => {},
  disabled = false,
  color = '',
  marginTop = '0px',
  marginBottom = '0px',
  marginLeft = '0px',
  marginRight = '0px',
  width = '100%',
  height = '64px',
  minHeight = '0px',
  paddingVertical = '0px',
  paddingHorizontal = '0px',
  isLoading = false,
  justifyContent = 'center',
  alignItems = 'center',
  onPressIn = () => {},
  onPressOut = () => {},
  activityColor,
  disabledColor,
}) => {
  const Element = Styles.Buttons[variant];

  const activityIndicatorSize = Platform.OS === 'ios' ? 'small' : 'large';

  return (
    <Element
      onPress={onPress}
      disabled={isLoading || disabled}
      color={disabled ? disabledColor : color}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      height={height}
      minHeight={minHeight}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      justifyContent={justifyContent}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      alignItems={alignItems}
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
