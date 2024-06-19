import React, { type FC } from 'react';
import { FlatList } from 'react-native';

import type { IPickerListProps } from '../../../types';

const PickerList: FC<IPickerListProps> = ({
  items,
  separator,
  renderItemFunction,
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => `${index}`}
      data={items}
      renderItem={renderItemFunction}
      ItemSeparatorComponent={separator}
    />
  );
};

export default PickerList;
