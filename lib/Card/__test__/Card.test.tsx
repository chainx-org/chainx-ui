import { cleanup, render, screen } from '@testing-library/react'
import { Card } from '../index'
import React from 'react'

describe('Icon Component', () => {
  afterEach(cleanup)

  it('render', () => {
    render(<Card>hello, this is card</Card>)
    const card = screen.getByTestId('card-wrapper')
    const text = screen.getByText('hello, this is card')
    expect(card).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('can set css style', () => {
    render(
      <Card
        width={'fit-content'}
        height={'auto'}
        padding={'12px 14px'}
        margin={'0 5px'}
        border={'none'}
        borderRadius={'12px'}
        backgroundColor={'#cccccc'}
        color={'black'}>
        hello, this is card
      </Card>,
    )
    const card = screen.getByTestId('card-wrapper')
    expect(card).toHaveStyle('padding: 12px 14px')
    expect(card).toHaveStyle('margin: 0 5px')
    expect(card).toHaveStyle('border: none')
    expect(card).toHaveStyle('border-radius: 12px')
    expect(card).toHaveStyle('background-color: #cccccc')
    expect(card).toHaveStyle('width: fit-content')
    expect(card).toHaveStyle('height: auto')
    expect(card).toHaveStyle('color: black')
  })

  it('can set class', () => {
    render(<Card className={'test-card'}>hello, this is card</Card>)
    const card = screen.getByTestId('card-wrapper')
    expect(card).toHaveClass('test-card')
  })
})
