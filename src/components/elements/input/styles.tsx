import styled from 'styled-components/native';

interface ContainerProps {
  topMargin?: string;
  leftMargin?: string;
  bottomMargin?: string;
}

interface ViewContainerProps {
  paddingHorizontal: string;
  paddingVertical: string;
  paddingTop: string;
  paddingBottom: string;
  width: string;
  height: string;
  topBorderLeftRadius: string;
  bottomBorderLeftRadius: string;
  topBorderRightRadius: string;
  bottomBorderRightRadius: string;
  borderColor: string;
}

interface InputProps {
  height: string;
  textMarginTop: string;
  textAlignVertical: string;
  color?: string;
}

export const Container = styled.View<ContainerProps>`
  margin-top: ${(props: ContainerProps) => props.topMargin};
  margin-left: ${(props: ContainerProps) => props.leftMargin};
  margin-bottom: ${(props: ContainerProps) => props.bottomMargin};
`;

export const InputView = styled.View<ViewContainerProps>`
  flex-direction: row;
  border-color: ${(props: ViewContainerProps) => props.borderColor};
  padding-horizontal: ${(props: ViewContainerProps) => props.paddingHorizontal};
  padding-vertical: ${(props: ViewContainerProps) => props.paddingVertical};
  padding-top: ${(props: ViewContainerProps) => props.paddingTop};
  padding-bottom: ${(props: ViewContainerProps) => props.paddingBottom};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-width: 1px;
  border-top-left-radius: ${(props: ViewContainerProps) =>
    props.topBorderLeftRadius};
  border-bottom-left-radius: ${(props: ViewContainerProps) =>
    props.bottomBorderLeftRadius};
  border-top-right-radius: ${(props: ViewContainerProps) =>
    props.topBorderRightRadius};
  border-bottom-right-radius: ${(props: ViewContainerProps) =>
    props.bottomBorderRightRadius};
  align-content: center;
`;

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  font-family: Roboto-Regular;
  font-size: 16px;
  line-height: 24px;
  height: ${(props) => props.height};
  width: 100%;
  margin-top: ${(props: InputProps) => props.textMarginTop};
  text-align-vertical: ${(props: InputProps) => props.textAlignVertical};
  ${({ color }) => color && `color: ${color}`};
`;
