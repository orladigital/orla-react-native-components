import React, { type Dispatch, type FC, type SetStateAction } from 'react';

import Button from '../../elements/button';
import Typography from '../../elements/typography';

import * as Styles from './styles';

export interface WarningModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onConfirmPress: () => void;
  title: string;
  body: string;
  confirmText: string;
  cancelText: string;
  confirmButtonColor: string;
  confirmButtonTextColor: string;
  cancelButtonColor: string;
  cancelButtonTextColor: string;
  confirmButtonWidth: string;
  cancelButtonWidth: string;
  shadowBackgroundColor: string;
  shadowPadding?: string;
  shadowAlignItems?: string;
  shadowJustifyContent?: string;
  shadowFlex?: string;
  padding?: string;
  maxHeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  backgroundColor?: string;
  borderRadius?: string;
  buttonContainerMarginTop?: string;
  buttonContainerMarginBottom?: string;
  buttonContainerMarginLeft?: string;
  buttonContainerMarginRight?: string;
  buttonContainerFlexDirection?: string;
  buttonContainerWidth?: string;
  buttonContainerJustifyContent?: string;
}

const WarningModal: FC<WarningModalProps> = ({
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
