import React, { type FC, useEffect, useRef } from 'react';
import NativeAdView, { NativeMediaView } from 'react-native-admob-native-ads';
import { Platform } from 'react-native';

import * as Styles from './styles';

export interface AdItemProps {
  mediaStyle: object;
  androidKey: string;
  iosKey: string;
  containerWidth?: string;
  containerHeight?: string;
  containerPadding?: string;
  containerBorder?: string;
  containerBorderRadius?: string;
}

const AdItem: FC<AdItemProps> = ({
  mediaStyle,
  androidKey,
  iosKey,
  containerWidth,
  containerHeight,
  containerPadding,
  containerBorder,
  containerBorderRadius,
}) => {
  const nativeAdViewRef = useRef<NativeAdView>(null);

  const key = Platform.OS === 'android' ? androidKey : iosKey;

  useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  return (
    <NativeAdView
      ref={nativeAdViewRef}
      mediaAspectRatio={'landscape'}
      adUnitID={key}
    >
      <Styles.Container
        width={containerWidth}
        height={containerHeight}
        padding={containerPadding}
        border={containerBorder}
        borderRadius={containerBorderRadius}
      >
        <NativeMediaView style={mediaStyle} />
      </Styles.Container>
    </NativeAdView>
  );
};

export default AdItem;
