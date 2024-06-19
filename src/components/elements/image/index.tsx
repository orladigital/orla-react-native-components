import React, { type FC } from 'react';

import type { IImageProps } from '../../../types';

import * as Styles from './styles';

const Image: FC<IImageProps> = ({ path, height, width }) => {
  return (
    <Styles.Image
      source={path}
      height={height as number}
      width={width as number}
    />
  );
};

export default Image;
