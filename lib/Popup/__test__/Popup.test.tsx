import React from 'react'
import { Popup } from '../index'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'

describe('Popup Component', () => {
  afterEach(cleanup)

  it('popup render', async () => {
    const { container } = render(
      <Popup
        $backgroundColor={'black'}
        color={'white'}
        $borderRadius={'10px'}
        placement="top"
        $maxWidth={'200px'}
        triggerEvent="hover"
        content={<div data-testid="popup-label">this is test label</div>}>
        <div id="popup-text">popup test</div>
      </Popup>,
    )
    fireEvent.mouseEnter(container.querySelector('#popup-text'))
    expect(await screen.findByText('this is test label')).toBeInTheDocument()
  })

  it('can set style', async () => {
    const { container } = render(
      <Popup
        $backgroundColor={'black'}
        color={'white'}
        $borderRadius={'10px'}
        placement="top"
        $maxWidth={'200px'}
        triggerEvent="hover"
        content={<div data-testid="popup-label">this is test label</div>}>
        <div id="popup-text">popup test</div>
      </Popup>,
    )
    fireEvent.mouseEnter(container.querySelector('#popup-text'))
    expect(await screen.findByText('this is test label')).toBeInTheDocument()

    const popupContainer = container.getElementsByClassName('ant-popover-content')[0]
    const popupInnerContainer = container.getElementsByClassName('ant-popover-inner-content')[0]
    expect(popupContainer).toHaveStyle('max-width: 200px')
    expect(popupInnerContainer).toHaveStyle('background: black')
    expect(popupInnerContainer).toHaveStyle('color: white')
    expect(popupInnerContainer).toHaveStyle('border-radius: 10px')
    expect(popupInnerContainer).toHaveStyle('padding: 5px 18px')
    expect(popupInnerContainer).toHaveStyle('font-size: 14px')
    expect(popupInnerContainer).toHaveStyle('text-align: left')
  })
})
