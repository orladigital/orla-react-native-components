import React, { type FC } from 'react';

import { Slider as SliderLib } from '@miblanchard/react-native-slider';

export interface SliderProps {
  minimumValue: number;
  maximumValue: number;
  fullColor: string;
  emptyColor: string;
  step: number;
  onValueChange: (value: Array<number>) => void;
  value: number;
  thumbTintColor: string;
  thumbStyle: object;
  trackStyle: object;
}

const Slider: FC<SliderProps> = ({
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
