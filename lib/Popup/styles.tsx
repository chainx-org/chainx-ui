import { Popover } from 'antd'
import styled from 'styled-components'

export const PopupWrapper = styled(Popover)<{
  $backgroundColor?: string
  color?: string
  padding?: string
  $fontSize?: string
  $fontWeight?: number
  $lineHeight?: string
  $borderRadius?: string
  $maxWidth?: string
  $textAlign?: string
}>`
  .ant-popover-content {
    border-radius: 10px;
    max-width: ${({ $maxWidth }) => $maxWidth && $maxWidth};
    .ant-popover-arrow-content {
      border-radius: 10px;
      background: #000000;
      box-shadow: 2px 6px 8px 2px rgba(0, 0, 0, 0.12);
      &:before {
        background: ${({ $backgroundColor }) => $backgroundColor && $backgroundColor};
      }
    }
    .ant-popover-inner {
      border-radius: 10px;
    }
    .ant-popover-inner-content {
      background: ${({ $backgroundColor }) => $backgroundColor && $backgroundColor};
      box-shadow: 2px 6px 8px 2px rgba(0, 0, 0, 0.12);
      color: ${({ color }) => color && color};
      padding: ${({ padding }) => (padding ? padding : '5px 18px')};
      border-radius: ${({ $borderRadius }) => $borderRadius && $borderRadius};
      font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '14px')};
      font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : 500)};
      line-height: ${({ $lineHeight }) => $lineHeight && $lineHeight};
      white-space: normal;
      text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : 'left')};
    }
  }
`
