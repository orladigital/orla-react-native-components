import styled from 'styled-components/native';

import colors from 'constants/colors';

export const Container = styled.View`
  margin-top: 16px;
`;

export const InputContainer = styled.View`
  height: 48px;
  flex-direction: row;
  flex: 1;
  border-color: ${colors.brandGray};
  border-width: 1px;
  align-items: center;
  padding: 0px 16px;
  border-radius: 24px;
`;
