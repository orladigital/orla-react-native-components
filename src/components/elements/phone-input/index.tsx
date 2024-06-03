import React, {FC, useState} from 'react';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';

import Typography from 'elements/typography';
import {useUser} from 'hooks/user-hook';
import Input from 'elements/input';

import * as Styles from './styles';

interface PhoneInputProps {
  label: string;
  placeholder: string;
  onPhoneChange: (phone: string) => void;
}

const PhoneInput: FC<PhoneInputProps> = ({
  label,
  placeholder,
  onPhoneChange,
}) => {
  const {countryCode} = useUser();

  const [code, setCode] = useState<string>('');
  const [actualCountryCode, setActualCountryCode] =
    useState<string>(countryCode);
  const [phone, setPhone] = useState<string>('');

  const onUpdatePhone = (newPhone: string) => {
    setPhone(newPhone);
    onPhoneChange(`${code}${newPhone}`);
  };

  const onUpdateCode = (country: Country) => {
    setCode(country.callingCode[0]);
    setActualCountryCode(country.cca2);
    onPhoneChange(`${country.callingCode[0]}${phone}`);
  };

  return (
    <Styles.Container>
      <Typography variant="SmallHighlight" marginBottom="8px">
        {label}
      </Typography>
      <Styles.InputContainer>
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
          onChangeText={value => onUpdatePhone(value)}
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
