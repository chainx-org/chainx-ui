import styled from 'styled-components'

export const IconWrapper = styled.img<{ margin?: string; padding?: string; border?: string; cursor?: string }>`
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  border: ${({ border }) => border && border};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`
