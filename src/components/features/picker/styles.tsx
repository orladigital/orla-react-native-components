import styled from 'styled-components/native';

interface ContainerProps {
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  backgroundColor: string;
}

interface ShadowProps {
  backgroundColor: string;
}

export const ModalPicker = styled.Modal``;

export const Container = styled.View<ContainerProps>`
  padding: 24px;
  padding-bottom: 16px;
  max-height: 400px;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  position: absolute;
  bottom: 0;
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
`;

export const Shadow = styled.TouchableOpacity<ShadowProps>`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
