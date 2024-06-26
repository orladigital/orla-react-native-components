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
  labelColor: string;
  placeholder: string;
  borderColor?: string;
  height?: string;
  flex?: string;
  flexDirection?: string;
  borderWidth?: string;
  alignItems?: string;
  padding?: string;
  borderRadius?: string;
  onPhoneChange: (phone: string) => void;
  countryCode: string;
  modalStyle?: { [key: string]: any };
}

const PhoneInput: FC<PhoneInputProps> = ({
  label,
  labelColor,
  placeholder,
  borderColor,
  height,
  flex,
  flexDirection,
  borderWidth,
  alignItems,
  padding,
  borderRadius,
  onPhoneChange,
  countryCode,
  modalStyle,
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
      <Styles.InputContainer
        borderColor={borderColor}
        height={height}
        flex={flex}
        flexDirection={flexDirection}
        borderWidth={borderWidth}
        alignItems={alignItems}
        padding={padding}
        borderRadius={borderRadius}
      >
        <CountryPicker
          withEmoji
          withCallingCode
          withCallingCodeButton
          countryCode={actualCountryCode as CountryCode}
          onSelect={onUpdateCode}
          modalProps={{
            style: modalStyle,
          }}
        />
        <Input
          value={phone}
          onChangeText={(value) => onUpdatePhone(value)}
          placeholder={placeholder}
          borderColor="transparent"
        />
      </Styles.InputContainer>
    </Styles.Container>
  );
};

export default PhoneInput;
