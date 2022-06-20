import React from 'react'
import { render, screen } from '@testing-library/react'
import { Icon } from '..'
import IconSearch from '@components/Icon/search.svg'

describe('Icon Component', () => {
  it('render', () => {
    render(<Icon iconSrc={IconSearch} />)
    const icon = screen.getAllByRole('img')[0]
    expect(icon).toBeInTheDocument()
  })

  it('can set style', () => {
    render(<Icon iconSrc={IconSearch} size={24} border={'1px solid red'} margin={'10px'} padding={'13px'} />)
    const icon = screen.getAllByRole('img')[1]

    expect(icon).toHaveStyle('border: 1px solid red')
    expect(icon).toHaveStyle('margin: 10px')
    expect(icon).toHaveStyle('padding: 13px')
  })

  it('can set size', () => {
    render(<Icon iconSrc={IconSearch} size={24} />)
    const icon = screen.getAllByRole('img')[2]
    expect(icon).toHaveAttribute('width', '24')
    expect(icon).toHaveAttribute('height', '24')
  })

  it('can set cursor', () => {
    render(<Icon iconSrc={IconSearch} size={24} cursor={'pointer'} />)
    const icon = screen.getAllByRole('img')[3]
    expect(icon).toHaveStyle('cursor: pointer')
  })
})
