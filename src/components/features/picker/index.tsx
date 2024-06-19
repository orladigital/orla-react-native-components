import React, { type FC } from 'react';

import PickerList from '../picker-list';
import type { IPickerProps } from '../../../types';

import * as Styles from './styles';

const Picker: FC<IPickerProps> = ({
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
