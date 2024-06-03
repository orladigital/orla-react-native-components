import React, { type FC } from 'react';

import Typography from '../typography';

import * as Styles from './styles';

export interface SwitchProps {
  label: string;
  state: boolean;
  onToggleChange: (isOn: boolean) => void;
  textColor: string;
  trackColor: string;
  trackFilledColor: string;
  thumbColor: string;
  thumbActiveColor: string;
}

const Switch: FC<SwitchProps> = ({
  label,
  state,
  onToggleChange,
  textColor,
  trackColor,
  trackFilledColor,
  thumbColor,
  thumbActiveColor,
}) => {
  const toggleSwitch = () => {
    onToggleChange(!state);
  };

  return (
    <Styles.Container>
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
