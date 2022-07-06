import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { EvmAvatar } from '../EvmAvatar'

describe('Avatar Component', () => {
  afterEach(cleanup)

  it('evm avatar render', () => {
    const { container } = render(<EvmAvatar address={'0xF01A4Fc4Bbe0fc5b9638602f71328a71d1ADfA8A'} size={30} />)
    const avatar = container.getElementsByClassName('paper')[0]
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveStyle('width: 30px')
    expect(avatar).toHaveStyle('height: 30px')
  })
})
