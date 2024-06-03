import React, {FC} from 'react';

import Typography from 'elements/typography';
import colors from 'constants/colors';

import * as Styles from './styles';

interface SwitchProps {
  label: string;
  state: boolean;
  onToggleChange: (isOn: boolean) => void;
}

const Switch: FC<SwitchProps> = ({label, state, onToggleChange}) => {
  const toggleSwitch = () => {
    onToggleChange(!state);
  };

  return (
    <Styles.Container>
      <Typography variant="Medium" color={colors.brandWhite}>
        {label}
      </Typography>
      <Styles.Switch
        trackColor={{
          false: colors.brandWhite,
          true: colors.brandWhite,
        }}
        thumbColor={state ? colors.brandSecondary : colors.brandWhite}
        onValueChange={toggleSwitch}
        value={state}
      />
    </Styles.Container>
  );
};

export default Switch;
