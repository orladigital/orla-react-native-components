import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';

import Typography from 'elements/typography';
import Button from 'elements/button';
import colors from 'constants/colors';
import Icon from 'elements/icon';
import {PickerOption} from 'app-types';
import {renderVisualElement} from 'features/render-icon-or-image';

import * as Styles from './styles';

interface PickerItemProps {
  item: PickerOption;
  index: number;
  onPress: (index: number) => void;
  select: number;
}

const PickerItem: FC<PickerItemProps> = ({item, index, onPress, select}) => {
  const {t} = useTranslation();

  const updateSelectedOption = () => onPress(index);

  return (
    <Button
      variant="Button"
      onPress={updateSelectedOption}
      key={index}
      paddingVertical={'16px'}>
      <Styles.ButtonContainer>
        {renderVisualElement(item.icon)}
        <Typography variant="Small" marginLeft={item.icon ? '16px' : '0px'}>
          {t(item.value)}
        </Typography>
      </Styles.ButtonContainer>
      {select === index && (
        <Icon name="check" color={colors.brandPrimary} size={24} />
      )}
    </Button>
  );
};

export default PickerItem;
