import { type KeyboardTypeOptions } from 'react-native/types';
import { type ReactNode, type Dispatch, type SetStateAction } from 'react';
import { type ViewStyle, type ListRenderItem } from 'react-native';

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

export type Features = 'Picker' | 'WarningModal';

export type Components = Elements | Features;

export type VariantProps = Record<Components, string | number> | {};

export type Variants = Record<Components, VariantProps> | {};

export interface IAvoidingScrollViewProps {
  children: ReactNode;
  contentContainer: { [key: string]: string | number };
  container: { [key: string]: string | number };
}

export interface IButtonProps {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  backgroundColor?: string;
  variant?: 'FilledButton' | 'BorderButton' | 'Button';
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  activityColor?: string;
  children?: ReactNode;
}

export interface IIconProps {
  color: string;
  name: string;
  size: number;
  rotate?: number;
}

export interface IInputProps {
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  flexDirection?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  height?: string;
  width?: string;
  borderColor?: string;
  borderWidth?: string;
  borderTopLeftRadius?: string;
  borderBottomLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
  alignContent?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  value: string;
  placeholder?: string;
  placeholderColor?: string;
  editable?: boolean;
  autoFocus?: boolean;
  multiline?: boolean;
  selectionColor?: string;
  blurOnSubmit?: boolean;
  label?: string;
  labelColor?: string;
  maxLength?: number;
  secureText?: boolean;
  keyboardType?: KeyboardTypeOptions;
  inputColor?: string;
}

export interface IImageProps {
  path: any;
  height?: string | number;
  width?: string | number;
}

export interface IPhoneInputProps {
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

export interface ISafeAreaProps {
  backgroundColor?: string;
  children: Element;
  shouldAddTopPadding?: boolean;
  shouldAddLeftPadding?: boolean;
  shouldAddRightPadding?: boolean;
  shouldAddBottomPadding?: boolean;
}

export interface ISafeAreaWithBarProps {
  color?: string;
  children: ReactNode;
  barStyle?: 'default' | 'light-content' | 'dark-content';
  containerStyle: ViewStyle;
}

export interface ISliderProps {
  minimumValue: number;
  maximumValue: number;
  fullColor: string;
  emptyColor: string;
  step: number;
  onValueChange: (value: Array<number>) => void;
  value: number;
  thumbTintColor: string;
  thumbStyle: object;
  trackStyle: object;
}

export interface ISwitchProps {
  label: string;
  state: boolean;
  onToggleChange: (isOn: boolean) => void;
  textColor: string;
  trackColor: string;
  trackFilledColor: string;
  thumbColor: string;
  thumbActiveColor: string;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
}

export interface ITypographyProps {
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  textAlign?: string;
  width?: string;
  textDecorationLine?: string;
  flexShrink?: number;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  numberOfLines?: number;
  children: ReactNode;
}

export interface IPickerProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  items: any[];
  separator: React.ComponentType<any> | null | undefined;
  renderItemFunction: ListRenderItem<any> | null | undefined;
  maxHeight?: string;
  width?: string;
  backgroundColor?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  position?: string;
  bottom?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  shadowFlex?: string;
  shadowJustifyContent?: string;
  shadowAlignItems?: string;
  shadowBackgroundColor?: string;
}

export interface IPickerListProps {
  items: any[];
  separator: React.ComponentType<any> | null | undefined;
  renderItemFunction: ListRenderItem<any> | null | undefined;
}

export interface IWarningModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  onConfirmPress: () => void;
  title: string;
  body: string;
  confirmText: string;
  cancelText: string;
  confirmButtonColor: string;
  confirmButtonTextColor: string;
  cancelButtonColor: string;
  cancelButtonTextColor: string;
  confirmButtonWidth: string;
  cancelButtonWidth: string;
  shadowBackgroundColor: string;
  shadowPadding?: string;
  shadowAlignItems?: string;
  shadowJustifyContent?: string;
  shadowFlex?: string;
  padding?: string;
  maxHeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  backgroundColor?: string;
  borderRadius?: string;
  buttonContainerMarginTop?: string;
  buttonContainerMarginBottom?: string;
  buttonContainerMarginLeft?: string;
  buttonContainerMarginRight?: string;
  buttonContainerFlexDirection?: string;
  buttonContainerWidth?: string;
  buttonContainerJustifyContent?: string;
}

export type DefineVariantObject = {
  component: Components;
  name: string;
  props: Record<Components, string | number> | {};
};
