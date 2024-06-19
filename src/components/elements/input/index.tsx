import React, { type FC } from 'react';
import Typography from '../typography';

import * as Styles from './styles';
import type { IInputProps } from '../../../types';

const Input: FC<IInputProps> = ({
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
