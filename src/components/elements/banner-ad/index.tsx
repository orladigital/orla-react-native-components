import React, { type FC } from 'react';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import { Platform } from 'react-native';

export interface BannerProps {
  showNoAds: boolean;
  androidKey: string;
  iosKey: string;
}

const Banner: FC<BannerProps> = ({ showNoAds, androidKey, iosKey }) => {
  const key = Platform.OS === 'android' ? androidKey : iosKey;

  const adUnitId = __DEV__ ? TestIds.BANNER : key;

  return (
    !showNoAds && (
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    )
  );
};

export default Banner;
