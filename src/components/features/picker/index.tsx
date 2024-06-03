import React, { type Dispatch, type FC, type SetStateAction } from 'react';
import PickerList from '../picker-list';

import * as Styles from './styles';
import type { ListRenderItem } from 'react-native';

export interface PickerProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  items: any[];
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  shadowBackgroundColor: string;
  containerBackgroundColor: string;
  separator: React.ComponentType<any> | null | undefined;
  renderItemFunction: ListRenderItem<any> | null | undefined;
}

const Picker: FC<PickerProps> = ({
  show,
  setShow,
  items,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  shadowBackgroundColor,
  containerBackgroundColor,
  separator,
  renderItemFunction,
}) => {
  const close = () => {
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
      <Styles.Container
        backgroundColor={containerBackgroundColor}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
      >
        <PickerList
          items={items}
          separator={separator}
          renderItemFunction={renderItemFunction}
        />
      </Styles.Container>
    </Styles.ModalPicker>
  );
};

export default Picker;
