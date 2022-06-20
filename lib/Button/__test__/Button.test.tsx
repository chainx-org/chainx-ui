import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@'

describe('Button Component', () => {
  it('render', async () => {
    render(<Button>click</Button>)
    expect(await screen.findByText('click')).toBeInTheDocument()
  })

  it('mounted', () => {
    expect(() => render(<Button>Follow</Button>)).not.toThrow()
  })

  it('have class', () => {
    render(<Button className={'test'}>Class name</Button>)
    const button = screen.getAllByRole('button')[2]
    expect(button).toHaveClass('test')
  })

  it('can click', () => {
    const onClick = jest.fn(() => 'jest test')
    render(<Button onClick={onClick}>click me</Button>)
    const button = screen.getAllByRole('button')[3]
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('can set style', () => {
    render(
      <Button padding={'24px'} margin={'14px'} color={'red'} border={'none'} $borderRadius={'20px'} $boxShadow={'none'}>
        click me
      </Button>,
    )
    const button = screen.getAllByRole('button')[4]
    expect(button).toHaveStyle('padding: 24px')
    expect(button).toHaveStyle('margin: 14px')
    expect(button).toHaveStyle('color: red')
    expect(button).toHaveStyle('border: none')
    expect(button).toHaveStyle('borderRadius: 20px')
    expect(button).toHaveStyle('boxShadow: none')
  })

  it('cannot click when set disabled', () => {
    const onClick = jest.fn()
    render(
      <Button onClick={onClick} disabled>
        disabled
      </Button>,
    )
    const button = screen.getAllByRole('button')[5]
    fireEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('can set style of disabled button', () => {
    render(
      <Button $disabledColor={'#cccccc'} $disabledBackgroundColor={'green'} disabled>
        disabled
      </Button>,
    )
    const button = screen.getAllByRole('button')[6]
    expect(button).toHaveStyle('color: #cccccc')
    expect(button).toHaveStyle('background: green')
  })
})
