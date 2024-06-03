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
  shadowBackgroundColor: string;
  containerBackgroundColor: string;
  confirmButtonWidth: string;
  cancelButtonWidth: string;
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
  shadowBackgroundColor,
  containerBackgroundColor,
  confirmButtonWidth,
  cancelButtonWidth,
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
      <Styles.Shadow onPress={close} backgroundColor={shadowBackgroundColor} />
      <Styles.CenterContainer>
        <Styles.Container backgroundColor={containerBackgroundColor}>
          <Typography textAlign="center">{title}</Typography>
          <Typography textAlign="center" marginTop="8px">
            {body}
          </Typography>
          <Styles.ButtonContainer>
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
      </Styles.CenterContainer>
    </Styles.ModalPicker>
  );
};

export default WarningModal;
