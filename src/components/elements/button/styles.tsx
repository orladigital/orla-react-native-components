import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  paddingVertical: string;
  paddingHorizontal: string;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  justifyContent: string;
  alignItems: string;
}

interface ButtonWithColorProps {
  paddingVertical: string;
  paddingHorizontal: string;
  color: string;
  width: string;
  height: string;
  minHeight: string;
  justifyContent: string;
  alignItems: string;
}

const BaseButton = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: ${(props: ButtonProps) => props.justifyContent};
  align-items: ${(props: ButtonProps) => props.alignItems};
  margin-right: ${(props: ButtonProps) => props.marginRight};
  margin-left: ${(props: ButtonProps) => props.marginLeft};
  margin-bottom: ${(props: ButtonProps) => props.marginBottom};
  margin-top: ${(props: ButtonProps) => props.marginTop};
  padding-vertical: ${(props: ButtonProps) => props.paddingVertical};
  padding-horizontal: ${(props: ButtonProps) => props.paddingHorizontal};
`;

const FilledButton = styled(BaseButton)<ButtonWithColorProps>`
  border-radius: 32px;
  border-width: 1px;
  justify-content: ${(props: ButtonWithColorProps) => props.justifyContent};
  align-items: ${(props: ButtonWithColorProps) => props.alignItems};
  border-color: ${(props: ButtonWithColorProps) => props.color};
  background-color: ${(props: ButtonWithColorProps) => props.color};
  width: ${(props: ButtonWithColorProps) => props.width};
  height: ${(props: ButtonWithColorProps) => props.height};
  min-height: ${(props: ButtonWithColorProps) => props.minHeight};
  padding-vertical: ${(props: ButtonWithColorProps) => props.paddingVertical};
  padding-horizontal: ${(props: ButtonWithColorProps) =>
    props.paddingHorizontal};
`;

const BorderButton = styled(BaseButton)<ButtonWithColorProps>`
  border-radius: 32px;
  border-width: 1px;
  border-color: ${(props: ButtonWithColorProps) => props.color};
  width: ${(props: ButtonWithColorProps) => props.width};
  height: ${(props: ButtonWithColorProps) => props.height};
  min-height: ${(props: ButtonWithColorProps) => props.minHeight};
  justify-content: ${(props: ButtonWithColorProps) => props.justifyContent};
  align-items: ${(props: ButtonWithColorProps) => props.alignItems};
  padding-vertical: ${(props: ButtonWithColorProps) => props.paddingVertical};
  padding-horizontal: ${(props: ButtonWithColorProps) =>
    props.paddingHorizontal};
`;

const ActivityContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled(BaseButton)``;

const Buttons = {
  FilledButton,
  BorderButton,
  Button,
};

export {Buttons, ActivityContainer};
