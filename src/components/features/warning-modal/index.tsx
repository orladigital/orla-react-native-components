import React, { type FC } from 'react';

import Button from '../../elements/button';
import Typography from '../../elements/typography';
import type { IWarningModalProps } from '../../../types';

import * as Styles from './styles';

const WarningModal: FC<IWarningModalProps> = ({
  show,
  setShow,
  onConfirmPress,
  title,
  body,
  confirmText,
  cancelText,
  confirmButtonColor,
  confirmButtonTextColor,
  cancelButtonColor,
  cancelButtonTextColor,
  confirmButtonWidth,
  cancelButtonWidth,
  shadowBackgroundColor,
  shadowPadding,
  shadowAlignItems,
  shadowJustifyContent,
  shadowFlex,
  padding,
  maxHeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  backgroundColor,
  borderRadius,
  buttonContainerMarginTop,
  buttonContainerMarginBottom,
  buttonContainerMarginLeft,
  buttonContainerMarginRight,
  buttonContainerFlexDirection,
  buttonContainerWidth,
  buttonContainerJustifyContent,
}) => {
  const close = () => {
    setShow(!show);
  };

  const onConfirm = () => {
    onConfirmPress();
    setShow(!show);
  };

  return (
    <Styles.ModalPicker
      statusBarTranslucent
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={close}
    >
      <Styles.Shadow
        onPress={close}
        backgroundColor={shadowBackgroundColor}
        padding={shadowPadding}
        alignItems={shadowAlignItems}
        justifyContent={shadowJustifyContent}
        flex={shadowFlex}
      />
      <Styles.Container
        padding={padding}
        maxHeight={maxHeight}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
      >
        <Typography textAlign="center">{title}</Typography>
        <Typography textAlign="center" marginTop="8px">
          {body}
        </Typography>
        <Styles.ButtonContainer
          marginTop={buttonContainerMarginTop}
          marginBottom={buttonContainerMarginBottom}
          marginLeft={buttonContainerMarginLeft}
          marginRight={buttonContainerMarginRight}
          flexDirection={buttonContainerFlexDirection}
          width={buttonContainerWidth}
          justifyContent={buttonContainerJustifyContent}
        >
          <Button
            variant="FilledButton"
            width={confirmButtonWidth}
            onPress={onConfirm}
            borderColor={confirmButtonColor}
            backgroundColor={confirmButtonColor}
          >
            <Typography textAlign="center" color={confirmButtonTextColor}>
              {confirmText}
            </Typography>
          </Button>
          <Button
            variant="FilledButton"
            width={cancelButtonWidth}
            onPress={close}
            borderColor={cancelButtonColor}
            backgroundColor={cancelButtonColor}
          >
            <Typography textAlign="center" color={cancelButtonTextColor}>
              {cancelText}
            </Typography>
          </Button>
        </Styles.ButtonContainer>
      </Styles.Container>
    </Styles.ModalPicker>
  );
};

export default WarningModal;
