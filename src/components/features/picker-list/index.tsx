import React, {FC} from 'react';
import {FlatList} from 'react-native';

import PickerItem from '../picker-item';
import {PickerOption} from 'app-types';

import * as Styles from './styles';

interface PickerListProps {
  items: PickerOption[];
  select: number;
  onSelectOption: (index: number) => void;
}

const PickerList: FC<PickerListProps> = ({items, select, onSelectOption}) => {
  const separator = () => <Styles.Separator />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => `${index}`}
      data={items}
      renderItem={({item, index}) => (
        <PickerItem
          item={item}
          index={index}
          select={select}
          onPress={onSelectOption}
        />
      )}
      ItemSeparatorComponent={separator}
    />
  );
};

export default PickerList;
