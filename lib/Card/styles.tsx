import { Card } from 'antd'
import styled from 'styled-components'

export const CardWrapper = styled(Card)<{
  padding?: string
  width?: string
  height?: string
  margin?: string
  border?: string
  borderRadius?: string
  color?: string
  backgroundColor?: string
}>`
  border: ${({ border }) => border && border};
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  color: ${({ color }) => color && color};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`
