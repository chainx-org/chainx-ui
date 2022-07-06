import React from 'react'
import { SkeletonAvatar } from '../SkeletonAvatar'
import { SkeletonParagraph } from '../SkeletonParagraph'
import { cleanup, render } from "@testing-library/react";

describe('Popup Component', () => {
  afterEach(cleanup)

  it('SkeletonAvatar render', () => {
    const { container } = render(<SkeletonAvatar size={24} />)
    const skeletonAvatar = container.getElementsByClassName('ant-skeleton')[0]
    expect(skeletonAvatar).toBeInTheDocument()
  })
  it('SkeletonParagraph render', () => {
    const { container } = render(<SkeletonParagraph />)
    const skeletonParagraph = container.getElementsByClassName('ant-skeleton')[0]
    expect(skeletonParagraph).toBeInTheDocument()
  })
  it('can set style', () => {
    const { container: avatarContainer } = render(<SkeletonAvatar shape={'square'} size={24} borderRadius={'12px'} />)
    const { container: paragraphContainer } = render(
      <SkeletonParagraph width={'113px'} height={'28px'} borderRadius={'14px'} />,
    )

    const skeletonAvatarHeader = avatarContainer.getElementsByClassName('ant-skeleton-header')[0]
    const skeletonAvatar = avatarContainer.getElementsByClassName('ant-skeleton-avatar')[0]
    const skeletonParagraph = paragraphContainer.getElementsByClassName('ant-skeleton')[0]
    const skeletonParagraphTitle = paragraphContainer.getElementsByClassName('ant-skeleton-title')[0]
    expect(skeletonAvatarHeader).toHaveStyle('padding: 0 12px 0 0')
    expect(skeletonAvatar).toHaveClass('ant-skeleton-avatar-square')
    expect(skeletonAvatar).toHaveStyle('width: 24px')
    expect(skeletonAvatar).toHaveStyle('height: 24px')
    expect(skeletonAvatar).toHaveStyle('border-radius: 12px')

    expect(skeletonParagraph).toHaveStyle('width: 113px')
    expect(skeletonParagraph).toHaveStyle('height: 28px')
    expect(skeletonParagraphTitle).toHaveStyle('border-radius: 14px')
  })
})
