import React from 'react'
import { SkeletonWrapper } from './styles'

interface Props {
  width?: string
  height?: string
  borderRadius?: string
  active?: boolean
}

const SkeletonParagraph: React.FC<Props> = ({ width, height, borderRadius, active = true }: Props) => {
  return (
    <SkeletonWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      paragraph={{ rows: 0 }}
      active={active}
    />
  )
}

export { SkeletonParagraph }
