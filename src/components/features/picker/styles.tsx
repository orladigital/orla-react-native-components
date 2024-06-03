import styled from 'styled-components/native';

import colors from 'constants/colors';

interface ContainerProps {
  paddingBottom: number;
}

export const ModalPicker = styled.Modal``;

export const Container = styled.View<ContainerProps>`
  padding: 24px;
  padding-bottom: 16px;
  max-height: 400px;
  width: 100%;
  background-color: ${colors.brandWhite};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  position: absolute;
  bottom: 0;
  padding-bottom: ${({paddingBottom}) => paddingBottom + 32}px;
`;

export const Shadow = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.brandBlack}60;
`;
