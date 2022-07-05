import React from 'react'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

interface Props {
  address: string
  size: number
}

const EvmAvatar: React.FC<Props> = ({ address, size }: Props) => {
  return <Jazzicon diameter={size} seed={jsNumberForAddress(address)} />
}

export default EvmAvatar
