import { type KeyboardTypeOptions } from 'react-native/types';
import React, { type FC } from 'react';
import Typography from '../typography';

import * as Styles from './styles';

export interface InputProps {
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  flexDirection?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  height?: string;
  width?: string;
  borderColor?: string;
  borderWidth?: string;
  borderTopLeftRadius?: string;
  borderBottomLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
  alignContent?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  value: string;
  placeholder?: string;
  placeholderColor?: string;
  editable?: boolean;
  autoFocus?: boolean;
  multiline?: boolean;
  selectionColor?: string;
  blurOnSubmit?: boolean;
  label?: string;
  labelColor?: string;
  maxLength?: number;
  secureText?: boolean;
  keyboardType?: KeyboardTypeOptions;
  inputColor?: string;
}

const Input: FC<InputProps> = ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  flexDirection,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  height,
  width,
  borderColor,
  borderWidth,
  borderTopLeftRadius,
  borderBottomLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  alignContent,
  onChangeText,
  onSubmitEditing = () => {},
  onBlur = () => {},
  value,
  placeholder,
  placeholderColor,
  editable = true,
  autoFocus = false,
  multiline = false,
  selectionColor,
  blurOnSubmit,
  label,
  labelColor,
  maxLength,
  secureText = false,
  keyboardType = 'default',
  inputColor,
}) => {
  const renderLabel = label ? (
    <Typography marginBottom="8px" color={labelColor}>
      {label}
    </Typography>
  ) : null;

  return (
    <Styles.Container
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
    >
      {renderLabel}
      <Styles.InputView
        flexDirection={flexDirection}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        height={height}
        width={width}
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderTopLeftRadius={borderTopLeftRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        alignContent={alignContent}
      >
        <Styles.Input
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          editable={editable}
          autoFocus={autoFocus}
          multiline={multiline}
          selectionColor={selectionColor}
          blurOnSubmit={blurOnSubmit}
          maxLength={maxLength}
          secureTextEntry={secureText}
          keyboardType={keyboardType}
          color={inputColor}
        />
      </Styles.InputView>
    </Styles.Container>
  );
};

export default Input;
