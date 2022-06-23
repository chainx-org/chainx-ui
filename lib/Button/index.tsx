import React from 'react'
import { ButtonWrapper } from './styles'
import { ButtonProps as AntdButtonProps } from 'antd'

export interface ButtonProps extends AntdButtonProps {
  children: React.ReactNode
  border?: string
  $backgroundColor?: string
  color?: string
  padding?: string
  margin?: string
  $borderRadius?: string
  $boxShadow?: string
  $hoverColor?: string
  $hoverBackgroundColor?: string
  $disabledColor?: string
  $disabledBackgroundColor?: string
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest }: ButtonProps) => {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>
}
