import React, { type FC, useState } from 'react';
import CountryPicker, {
  type Country,
  type CountryCode,
} from 'react-native-country-picker-modal';

import Typography from '../typography';
import Input from '../input';

import * as Styles from './styles';

export interface PhoneInputProps {
  label: string;
  placeholder: string;
  onPhoneChange: (phone: string) => void;
  countryCode: string;
  labelColor: string;
  borderColor: string;
}

const PhoneInput: FC<PhoneInputProps> = ({
  label,
  placeholder,
  onPhoneChange,
  countryCode,
  labelColor,
  borderColor,
}) => {
  const [code, setCode] = useState<string>('');
  const [actualCountryCode, setActualCountryCode] =
    useState<string>(countryCode);
  const [phone, setPhone] = useState<string>('');

  const onUpdatePhone = (newPhone: string) => {
    setPhone(newPhone);
    onPhoneChange(`${code}${newPhone}`);
  };

  const onUpdateCode = (country: Country) => {
    setCode(country.callingCode[0] as string);
    setActualCountryCode(country.cca2);
    onPhoneChange(`${country.callingCode[0]}${phone}`);
  };

  return (
    <Styles.Container>
      <Typography marginBottom="8px" color={labelColor}>
        {label}
      </Typography>
      <Styles.InputContainer borderColor={borderColor}>
        <CountryPicker
          withEmoji
          withCallingCode
          withCallingCodeButton
          countryCode={actualCountryCode as CountryCode}
          onSelect={onUpdateCode}
          modalProps={{
            style: {
              width: 10,
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        />
        <Input
          value={phone}
          onChangeText={(value) => onUpdatePhone(value)}
          placeholder={placeholder}
          borderColor="transparent"
          topMargin="5px"
          leftMargin="-10px"
        />
      </Styles.InputContainer>
    </Styles.Container>
  );
};

export default PhoneInput;
