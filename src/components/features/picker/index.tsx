import React, {Dispatch, FC, SetStateAction} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import PickerList from 'features/picker-list';
import {PickerOption} from 'app-types';

import * as Styles from './styles';

interface PickerProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  items: PickerOption[];
  select: number;
  onPress: (index: number) => void;
}

const Picker: FC<PickerProps> = ({show, setShow, items, select, onPress}) => {
  const insets = useSafeAreaInsets();

  const close = () => {
    setShow(!show);
  };

  const onSelectOption = (index: number) => {
    onPress(index);
    close();
  };

  return (
    <Styles.ModalPicker
      statusBarTranslucent
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={close}>
      <Styles.Shadow onPress={close} />
      <Styles.Container paddingBottom={insets.bottom}>
        <PickerList
          items={items}
          select={select}
          onSelectOption={onSelectOption}
        />
      </Styles.Container>
    </Styles.ModalPicker>
  );
};

export default Picker;
