import React from 'react'
import { CardWrapper } from './styles'
import { CardProps } from 'antd'

interface Props extends CardProps {
  padding?: string
  width?: string
  height?: string
  margin?: string
  border?: string
  borderRadius?: string
  color?: string
  backgroundColor?: string
  children: React.ReactNode
  className?: string
}

const Card: React.FC<Props> = ({
  padding,
  width,
  height,
  margin,
  border,
  borderRadius,
  color,
  backgroundColor,
  children,
  className = '',
  ...rest
}: Props) => {
  return (
    <CardWrapper
      data-testid={'card-wrapper'}
      className={className}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      color={color}
      backgroundColor={backgroundColor}
      {...rest}>
      {children}
    </CardWrapper>
  )
}

export { Card }
