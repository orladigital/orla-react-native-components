import styled from 'styled-components/native';

interface ContainerProps {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Container = styled.View<ContainerProps>`
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
`;

export const Switch = styled.Switch``;
