import React, {FC} from 'react';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

import {usePayment} from 'hooks/payment-hook';
import {Platform} from 'react-native';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : Platform.OS === 'android'
  ? 'ad-key'
  : 'ad-key';

const Banner: FC = () => {
  const {showNoAds} = usePayment();

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
