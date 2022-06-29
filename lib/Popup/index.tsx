import React from 'react'
import { PopoverProps } from 'antd'
import { PopupWrapper } from './styles'

interface Props extends PopoverProps {
  children: React.ReactNode
  triggerEvent: string
  content: string
  visible?: boolean
  setVisible?: React.Dispatch<boolean>
  $backgroundColor?: string
  color?: string
  padding?: string
  $fontSize?: string
  $fontWeight?: number
  $lineHeight?: string
  $borderRadius?: string
  $maxWidth?: string
}

const Popup: React.FC<Props> = ({
  visible,
  setVisible,
  content,
  triggerEvent,
  children,
  $backgroundColor,
  color,
  $fontSize,
  $fontWeight,
  $lineHeight,
  $borderRadius,
  $maxWidth,
  ...rest
}: Props) => {
  return (
    <PopupWrapper
      content={content}
      trigger={triggerEvent}
      visible={visible}
      onVisibleChange={setVisible}
      getPopupContainer={triggerNode => triggerNode}
      $backgroundColor={$backgroundColor}
      color={color}
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $lineHeight={$lineHeight}
      $borderRadius={$borderRadius}
      $maxWidth={$maxWidth}
      {...rest}>
      {children}
    </PopupWrapper>
  )
}

export { Popup }
