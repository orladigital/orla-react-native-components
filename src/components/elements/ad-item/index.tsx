import React, {FC, useEffect, useRef} from 'react';
import NativeAdView, {NativeMediaView} from 'react-native-admob-native-ads';
import {DimensionValue, Platform} from 'react-native';

import * as Styles from './styles';

const AdItem: FC = () => {
  const nativeAdViewRef = useRef<NativeAdView>(null);

  const mediaStyle = {
    height: 200,
    width: '100%' as DimensionValue,
  };

  useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  return (
    <NativeAdView
      ref={nativeAdViewRef}
      mediaAspectRatio={'landscape'}
      adUnitID={
        Platform.OS === 'android'
          ? 'ad-key'
          : 'ad-key'
      }>
      <Styles.Container>
        <NativeMediaView style={mediaStyle} />
      </Styles.Container>
    </NativeAdView>
  );
};

export default AdItem;
