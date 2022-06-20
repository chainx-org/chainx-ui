import styled from 'styled-components';
import { Button } from 'antd';
export const ButtonWrapper = styled(Button) `
  height: auto;
  border: ${({ border }) => border && border};
  background: ${({ $backgroundColor }) => $backgroundColor && $backgroundColor};
  color: ${({ color }) => color && color};
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  border-radius: ${({ $borderRadius }) => $borderRadius && $borderRadius};
  box-shadow: ${({ $boxShadow }) => $boxShadow && $boxShadow};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${({ $hoverColor }) => $hoverColor && $hoverColor};
    background: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor && $hoverBackgroundColor};
  }
  &::after {
    box-shadow: none;
  }
  &[ant-click-animating-without-extra-node='true']:after {
    border: 0 none;
    opacity: 0;
    animation: none 0 ease 0 1 normal;
  }

  &:disabled,
  &[disabled],
  &[disabled]:hover,
  &:disabled:hover {
    cursor: not-allowed;
    border: none;
    color: ${({ $disabledColor }) => ($disabledColor ? $disabledColor : 'white')};
    background: ${({ $disabledBackgroundColor }) => ($disabledBackgroundColor ? $disabledBackgroundColor : '#cccccc')};
  }
`;
//# sourceMappingURL=styles.js.map