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
          <Typography textAlign="center" variant="Medium">
            {title}
          </Typography>
          <Typography textAlign="center" variant="Small" marginTop="8px">
            {body}
          </Typography>
          <Styles.ButtonContainer>
            <Button
              variant="FilledButton"
              width="49%"
              onPress={onConfirm}
              color={confirmButtonColor}
              paddingHorizontal="16px"
            >
              <Typography
                textAlign="center"
                variant="Medium"
                color={confirmButtonTextColor}
              >
                {confirmText}
              </Typography>
            </Button>
            <Button
              variant="FilledButton"
              width="49%"
              onPress={close}
              color={cancelButtonColor}
              paddingHorizontal="16px"
            >
              <Typography
                textAlign="center"
                variant="Medium"
                color={cancelButtonTextColor}
              >
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
