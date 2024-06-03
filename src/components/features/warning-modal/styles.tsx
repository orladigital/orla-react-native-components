import styled from 'styled-components/native';

import colors from 'constants/colors';

export const ModalPicker = styled.Modal``;

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.View`
  padding: 24px;
  padding-bottom: 16px;
  max-height: 70%;
  margin-left: 16px;
  margin-right: 16px;
  background-color: ${colors.brandWhite};
  border-radius: 32px;
`;

export const Shadow = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.brandBlack}60;
  padding: 16px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
