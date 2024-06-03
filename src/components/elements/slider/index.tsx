import React, {FC} from 'react';

import {Slider as SliderLib} from '@miblanchard/react-native-slider';

interface SliderProps {
  minimumValue: number;
  maximumValue: number;
  fullColor: string;
  emptyColor: string;
  step: number;
  onValueChange: (value: Array<number>) => void;
  value: number;
  thumbTintColor: string;
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
}) => {
  const thumbStyle = {
    width: 24,
    height: 24,
    borderRadius: 48,
  };

  const trackStyle = {
    height: 8,
    borderRadius: 8,
  };

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
