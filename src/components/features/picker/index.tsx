import React, { type Dispatch, type FC, type SetStateAction } from 'react';
import PickerList from '../picker-list';

import * as Styles from './styles';
import type { ListRenderItem } from 'react-native';

export interface PickerProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  items: any[];
  separator: React.ComponentType<any> | null | undefined;
  renderItemFunction: ListRenderItem<any> | null | undefined;
  maxHeight?: string;
  width?: string;
  backgroundColor?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  position?: string;
  bottom?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  shadowFlex?: string;
  shadowJustifyContent?: string;
  shadowAlignItems?: string;
  shadowBackgroundColor?: string;
}

const Picker: FC<PickerProps> = ({
  show,
  setShow,
  items,
  separator,
  renderItemFunction,
  maxHeight,
  width,
  backgroundColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  position,
  bottom,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  shadowFlex,
  shadowJustifyContent,
  shadowAlignItems,
  shadowBackgroundColor,
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
      <Styles.Shadow
        onPress={close}
        flex={shadowFlex}
        justifyContent={shadowJustifyContent}
        alignItems={shadowAlignItems}
        backgroundColor={shadowBackgroundColor}
      />
      <Styles.Container
        maxHeight={maxHeight}
        width={width}
        backgroundColor={backgroundColor}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        position={position}
        bottom={bottom}
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
