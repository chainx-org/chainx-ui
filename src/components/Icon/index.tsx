import React from 'react'
import { IconWrapper } from './styles'

interface Props {
  iconSrc: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  size?: number
  altName?: string
  className?: string
  color?: string
  margin?: string
  padding?: string
  border?: string
  cursor?: string
}

const Icon: React.FC<Props> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  iconSrc,
  size,
  margin,
  padding,
  border,
  cursor,
  altName = '',
  className = '',
}: Props) => {
  return (
    <IconWrapper
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      src={iconSrc}
      alt={altName}
      width={size}
      height={size}
      margin={margin}
      padding={padding}
      border={border}
      cursor={cursor}
    />
  )
}

export { Icon }
