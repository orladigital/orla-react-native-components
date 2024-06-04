import styled from 'styled-components/native';

interface ContainerProps {
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
}

interface ShadowProps {
  backgroundColor?: string;
  flex?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const ModalPicker = styled.Modal``;

export const Container = styled.View<ContainerProps>`
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius && `border-top-left-radius: ${borderTopLeftRadius}`};
  ${({ borderTopRightRadius }) =>
    borderTopRightRadius && `border-top-right-radius: ${borderTopRightRadius}`};
  ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius &&
    `border-bottom-left-radius: ${borderBottomLeftRadius}`};
  ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius &&
    `border-bottom-right-radius: ${borderBottomRightRadius}`};
  ${({ position }) => position && `position: ${position}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}`};
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom}`};
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}`};
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}`};
`;

export const Shadow = styled.TouchableOpacity<ShadowProps>`
  ${({ flex }) => `flex: ${flex}`};
  ${({ justifyContent }) => `justify-content: ${justifyContent}`};
  ${({ alignItems }) => `align-items: ${alignItems}`};
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
`;
