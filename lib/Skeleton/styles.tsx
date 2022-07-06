import { Skeleton } from 'antd'
import styled from 'styled-components'

export const SkeletonWrapper = styled(Skeleton)<{
  width?: string
  height?: string
  borderRadius?: string
  padding?: string
  margin?: string
}>`
  &.ant-skeleton {
    width: ${({ width }) => (width ? width : '97px')};
    height: ${({ height }) => (height ? height : '20px')};
  }
  .ant-skeleton-input {
  }
  .ant-skeleton-title {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius} !important` : '10px !important')};
  }
  .ant-skeleton-paragraph {
    display: none;
  }
  .ant-skeleton-header {
    padding: ${({ padding }) => (padding ? padding : '0 12px 0 0')};
    .ant-skeleton-avatar {
      border-radius: ${({ borderRadius }) => borderRadius && `${borderRadius} !important`};
    }
  }
`
