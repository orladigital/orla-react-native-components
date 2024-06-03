import styled from 'styled-components/native';

interface SafeAreaProps {
  paddingTop: number;
  paddingLeft: number;
  paddingRight: number;
  paddingBottom: number;
  backgroundColor?: string;
  children: Element;
}

export const SafeArea = styled.View<SafeAreaProps>`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: ${({paddingTop}) => paddingTop}px;
  padding-left: ${({paddingLeft}) => paddingLeft}px;
  padding-right: ${({paddingRight}) => paddingRight}px;
  padding-bottom: ${({paddingBottom}) => paddingBottom}px;
  background-color: ${({backgroundColor}) => backgroundColor};
`;
