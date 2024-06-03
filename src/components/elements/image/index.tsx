import React, {FC} from 'react';

import {images} from 'constants/images';

import * as Styles from './styles';

interface ImageProps {
  path?: keyof typeof images;
  sprite?: string;
  height?: string | number;
  width?: string | number;
}

const Image: FC<ImageProps> = ({path, sprite, height, width}) => {
  if (path || sprite) {
    return (
      <Styles.Image
        source={path ? images[path] : sprite}
        height={height as number}
        width={width as number}
      />
    );
  }
};

export default Image;
