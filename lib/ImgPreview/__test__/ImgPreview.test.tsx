import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ImgPreview } from '../index'

describe('ImgPreview Component', () => {
  afterEach(cleanup)

  it('render', () => {
    render(
      <ImgPreview
        acceptSize={1}
        acceptType={['image/png']}
        defaultLabel={'JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB'}
      />,
    )
    const imgPreview = screen.getByText('JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB')
    expect(imgPreview).toBeInTheDocument()
  })

  it('mounted', () => {
    expect(() =>
      render(
        <ImgPreview
          acceptSize={1}
          acceptType={['image/png']}
          defaultLabel={'JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB'}
        />,
      ),
    ).not.toThrow()
  })

  it('have class name', () => {
    render(
      <ImgPreview
        className={'test-img-preview-wrapper'}
        uploadClassName={'test-upload-wrapper'}
        previewClassName={'test-preview-wrapper'}
        acceptSize={1}
        acceptType={['image/png']}
        defaultLabel={'JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB'}
      />,
    )
    const wrapper = screen.getByTestId('wrapper')
    const uploadWrapper = screen.getByTestId('upload-wrapper')
    const previewWrapper = screen.getByTestId('preview-wrapper')
    expect(wrapper).toHaveClass('test-img-preview-wrapper')
    expect(uploadWrapper).toHaveClass('test-upload-wrapper')
    expect(previewWrapper).toHaveClass('test-preview-wrapper')
  })

  it('can set style', () => {
    render(
      <ImgPreview
        className={'test-img-preview-wrapper'}
        uploadClassName={'test-upload-wrapper'}
        previewClassName={'test-preview-wrapper'}
        uploadCardStyle={{
          border: '1px solid green',
          padding: '12px 4px',
          width: '20px',
          height: '15px',
          margin: '4px',
          borderRadius: '50%',
        }}
        uploadLabelStyle={{
          fontSize: 14,
          fontWeight: 600,
          color: 'blue',
          lineHeight: '14px',
          textAlign: 'left',
        }}
        previewCardStyle={{
          padding: '12px 4px',
          width: '300px',
          height: '500px',
          margin: '12px',
          borderRadius: '20px',
        }}
        previewLabelStyle={{
          fontSize: 20,
          fontWeight: 400,
          color: 'red',
          lineHeight: '23px',
          textAlign: 'center',
        }}
        acceptSize={1}
        acceptType={['image/png']}
        defaultLabel={'JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB'}
      />,
    )

    const uploadWrapper = screen.getByTestId('upload-wrapper')
    const uploadLabel = screen.getByTestId('upload-label')
    const previewWrapper = screen.getByTestId('preview-wrapper')
    const previewLabel = screen.getByTestId('preview-label')
    expect(uploadWrapper).toHaveStyle('border: 1px solid green')
    expect(uploadWrapper).toHaveStyle('padding: 12px 4px')
    expect(uploadWrapper).toHaveStyle('width: 20px')
    expect(uploadWrapper).toHaveStyle('height: 15px')
    expect(uploadWrapper).toHaveStyle('margin: 4px')
    expect(uploadWrapper).toHaveStyle('border-radius: 50%')
    expect(uploadLabel).toHaveStyle('font-size: 14px')
    expect(uploadLabel).toHaveStyle('font-weight: 600')
    expect(uploadLabel).toHaveStyle('color: blue')
    expect(uploadLabel).toHaveStyle('line-height: 14px')
    expect(uploadLabel).toHaveStyle('text-align: left')

    expect(previewWrapper).toHaveStyle('padding: 12px 4px')
    expect(previewWrapper).toHaveStyle('margin: 12px')
    expect(previewWrapper).toHaveStyle('border-radius: 20px')
    expect(previewLabel).toHaveStyle('font-size: 20px')
    expect(previewLabel).toHaveStyle('font-weight: 400')
    expect(previewLabel).toHaveStyle('color: red')
    expect(previewLabel).toHaveStyle('line-height: 23px')
    expect(previewLabel).toHaveStyle('text-align: center')
  })

  it('can upload file', async () => {
    render(
      <ImgPreview
        acceptSize={1}
        acceptType={['image/png']}
        defaultLabel={'JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB'}
      />,
    )
    const fakeFile = new File(['test'], 'test.png', { type: 'image/png' })
    const inputFile = await screen.getByTestId('upload-input')
    await userEvent.upload(inputFile, fakeFile)

    // @ts-ignore
    expect(inputFile.files[0]).toStrictEqual(fakeFile)
    // @ts-ignore
    expect(inputFile.files).toHaveLength(1)
  })

  it('can limit accept type of file', async () => {
    render(
      <ImgPreview
        acceptSize={1}
        acceptType={['image/png']}
        defaultLabel={'JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB'}
      />,
    )
    const fakeFile = new File(['test'], 'test.jpeg', { type: 'image/jpeg' })
    const inputFile = await screen.getByTestId('upload-input')
    await userEvent.upload(inputFile, fakeFile)
    // @ts-ignore
    expect(inputFile.files).toHaveLength(0)
  })

  it('can limit size of file', async () => {
    render(
      <ImgPreview
        acceptSize={1}
        acceptType={['image/png']}
        defaultLabel={'JPG, PNG, GIF. Recommended size:800X502. Max Size：1MB'}
      />,
    )
    const fakeFile = new File(['test'], 'test.png', { type: 'image/png' })
    Object.defineProperty(fakeFile, 'size', { value: 1024 * 1024 + 1, configurable: true })

    const inputFile = await screen.getByTestId('upload-input')
    await userEvent.upload(inputFile, fakeFile)
    // @ts-ignore
    expect(inputFile.files).toHaveLength(1)
  })
})
