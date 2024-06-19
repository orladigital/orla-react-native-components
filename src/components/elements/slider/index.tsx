import React, { type FC } from 'react';
import { Slider as SliderLib } from '@miblanchard/react-native-slider';

import type { ISliderProps } from '../../../types';

const Slider: FC<ISliderProps> = ({
  minimumValue,
  maximumValue,
  fullColor,
  emptyColor,
  step,
  onValueChange,
  value,
  thumbTintColor,
  thumbStyle,
  trackStyle,
}) => {
  return (
    <SliderLib
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor={emptyColor}
      maximumTrackTintColor={fullColor}
      thumbTintColor={thumbTintColor}
      step={step}
      onValueChange={onValueChange}
      value={value}
      thumbStyle={thumbStyle}
      trackStyle={trackStyle}
    />
  );
};

export default Slider;
