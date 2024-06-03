import React, { type FC } from 'react';
import { FlatList, type ListRenderItem } from 'react-native';

interface PickerListProps {
  items: any[];
  separator: React.ComponentType<any> | null | undefined;
  renderItemFunction: ListRenderItem<any> | null | undefined;
}

const PickerList: FC<PickerListProps> = ({
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
