import React, {Dispatch, FC, SetStateAction} from 'react';
import {useTranslation} from 'react-i18next';

import Button from 'elements/button';
import Typography from 'elements/typography';
import colors from 'constants/colors';

import * as Styles from './styles';

interface WarningModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onConfirmPress: () => void;
  title: string;
  body: string;
  confirmText: string;
}

const WarningModal: FC<WarningModalProps> = ({
  show,
  setShow,
  onConfirmPress,
  title,
  body,
  confirmText,
}) => {
  const {t} = useTranslation();

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
      onRequestClose={close}>
      <Styles.Shadow onPress={close} />
      <Styles.CenterContainer>
        <Styles.Container>
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
              color={colors.brandPrimary}
              paddingHorizontal="16px">
              <Typography
                textAlign="center"
                variant="Medium"
                color={colors.brandWhite}>
                {confirmText}
              </Typography>
            </Button>
            <Button
              variant="FilledButton"
              width="49%"
              onPress={close}
              color={colors.brandGray}
              paddingHorizontal="16px">
              <Typography textAlign="center" variant="Medium">
                {t('cancel')}
              </Typography>
            </Button>
          </Styles.ButtonContainer>
        </Styles.Container>
      </Styles.CenterContainer>
    </Styles.ModalPicker>
  );
};

export default WarningModal;
