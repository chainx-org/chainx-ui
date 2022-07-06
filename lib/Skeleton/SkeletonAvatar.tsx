import React from 'react'
import { SkeletonWrapper } from './styles'

interface Props {
  size: number
  width?: string
  height?: string
  borderRadius?: string
  shape?: 'circle' | 'square'
  active?: boolean
  padding?: string
}

const SkeletonAvatar: React.FC<Props> = ({
  size,
  width,
  height,
  borderRadius,
  padding,
  shape = 'circle',
  active = true,
}: Props) => {
  return (
    <SkeletonWrapper
      width={`${size}px` || width}
      height={height}
      borderRadius={borderRadius}
      avatar={{
        shape,
        size,
      }}
      paragraph={false}
      title={false}
      active={active}
      padding={padding}
    />
  )
}

export { SkeletonAvatar }
