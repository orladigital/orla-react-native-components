import React, { type FC } from 'react';

import Typography from '../typography';
import type { ISwitchProps } from '../../../types';

import * as Styles from './styles';

const Switch: FC<ISwitchProps> = ({
  label,
  state,
  onToggleChange,
  textColor,
  trackColor,
  trackFilledColor,
  thumbColor,
  thumbActiveColor,
  flexDirection,
  alignItems,
  justifyContent,
}) => {
  const toggleSwitch = () => {
    onToggleChange(!state);
  };

  return (
    <Styles.Container
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <Typography color={textColor}>{label}</Typography>
      <Styles.Switch
        trackColor={{
          false: trackColor,
          true: trackFilledColor,
        }}
        thumbColor={state ? thumbActiveColor : thumbColor}
        onValueChange={toggleSwitch}
        value={state}
      />
    </Styles.Container>
  );
};

export default Switch;
