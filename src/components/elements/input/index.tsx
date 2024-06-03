import { type KeyboardTypeOptions } from 'react-native/types';
import React, { type FC } from 'react';
import Typography from '../typography';

import * as Styles from './styles';

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  editable?: boolean;
  onSubmitEditing?: () => void;
  autoFocus?: boolean;
  borderColor: string;
  topMargin?: string;
  leftMargin?: string;
  bottomMargin?: string;
  height?: string;
  width?: string;
  multiline?: boolean;
  paddingVertical?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingHorizontal?: string;
  textAlignVertical?: string;
  textMarginTop?: string;
  label?: string;
  topBorderLeftRadius?: string;
  bottomBorderLeftRadius?: string;
  topBorderRightRadius?: string;
  bottomBorderRightRadius?: string;
  maxLength?: number;
  secureText?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: () => void;
  labelColor: string;
  placeholderColor: string;
  selectionColor: string;
  inputColor: string;
}

const Input: FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  editable = true,
  onSubmitEditing = () => {},
  autoFocus = false,
  borderColor,
  topMargin = '0px',
  leftMargin = '0px',
  bottomMargin = '0px',
  height = '48px',
  width = '100%',
  multiline = false,
  paddingVertical = '0px',
  paddingTop = '0px',
  paddingBottom = '0px',
  paddingHorizontal = '0px',
  textAlignVertical = 'top',
  textMarginTop = '0px',
  label,
  topBorderLeftRadius = '24px',
  bottomBorderLeftRadius = '24px',
  topBorderRightRadius = '24px',
  bottomBorderRightRadius = '24px',
  maxLength = undefined,
  secureText = false,
  keyboardType = 'default',
  onBlur = () => {},
  labelColor,
  placeholderColor,
  selectionColor,
  inputColor,
}) => {
  const renderLabel = label ? (
    <Typography variant="Small" marginBottom="8px" color={labelColor}>
      {label}
    </Typography>
  ) : null;

  return (
    <Styles.Container
      topMargin={topMargin}
      leftMargin={leftMargin}
      bottomMargin={bottomMargin}
    >
      {renderLabel}
      <Styles.InputView
        borderColor={borderColor}
        paddingVertical={paddingVertical}
        paddingTop={paddingTop}
        width={width}
        topBorderLeftRadius={topBorderLeftRadius}
        bottomBorderLeftRadius={bottomBorderLeftRadius}
        topBorderRightRadius={topBorderRightRadius}
        bottomBorderRightRadius={bottomBorderRightRadius}
        paddingBottom={paddingBottom}
        paddingHorizontal={paddingHorizontal}
        height={height}
      >
        <Styles.Input
          autoFocus={autoFocus}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderColor}
          placeholder={placeholder}
          editable={editable}
          selectionColor={selectionColor}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={false}
          multiline={multiline}
          maxLength={maxLength}
          secureTextEntry={secureText}
          keyboardType={keyboardType}
          onBlur={onBlur}
          height={height}
          textAlignVertical={textAlignVertical}
          textMarginTop={textMarginTop}
          inputColor={inputColor}
        />
      </Styles.InputView>
    </Styles.Container>
  );
};

export default Input;
