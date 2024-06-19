export type Elements =
  | 'AvoidingScrollView'
  | 'Button'
  | 'Icon'
  | 'Image'
  | 'Input'
  | 'PhoneInput'
  | 'SafeArea'
  | 'SafeAreaWithBar'
  | 'Slider'
  | 'Switch'
  | 'Typography';

export type Features = 'Picker' | 'PickerList' | 'WarningModal';

export type Components = Elements | Features;

export type VariantProps = Record<Components, string | number> | {};

export type Variants = Record<Components, VariantProps> | {};

export type DefineVariantObject = {
  component: Components;
  name: string;
  defaultProps: {};
};
