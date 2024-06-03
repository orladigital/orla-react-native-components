import React from 'react';
import CountryFlag from 'react-native-country-flag';

import colors from 'constants/colors';
import Icon from 'elements/icon';

export const renderVisualElement = ({
  type,
  value,
}: {
  type: 'icon' | 'country';
  value: string;
}) => {
  if (type === 'icon') {
    return <Icon name={value} color={colors.brandPrimary} size={24} />;
  } else if (type === 'country') {
    return <CountryFlag isoCode={value} size={24} />;
  }
  return null;
};
