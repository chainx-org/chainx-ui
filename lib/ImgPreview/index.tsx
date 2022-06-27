import React, { useCallback, useState } from 'react'
import { Icon } from '@components'
import IconRemove from '@components/ImgPreview/icon_remove.svg'
import { ImgPreviewWrapper, PreviewWrapper, UploadWrapper } from './styles'

export type CardStyle = {
  width?: string
  height?: string
  borderRadius?: string
  border?: string
  padding?: string
  margin?: string
}

export type LabelStyle = {
  fontSize?: number
  fontFamily?: string
  fontWeight?: number
  color?: string
  lineHeight?: string
  textAlign?: string
}

interface ImgPreviewProps {
  acceptType: string[]
  acceptSize: number // M
  defaultLabel: string
  uploadCardStyle?: CardStyle
  uploadLabelStyle?: LabelStyle
  previewCardStyle?: CardStyle
  previewLabelStyle?: LabelStyle
  closeIcon?: React.ReactNode
  className?: string
  uploadClassName?: string
  previewClassName?: string
}

const DEFAULT_CARD_STYLE: CardStyle = {
  width: '480px',
  height: '300px',
  borderRadius: '10px',
}

const DEFAULT_LABEL_STYLE: LabelStyle = {
  fontSize: 16,
  fontWeight: 500,
  color: '#999999',
  lineHeight: '22px',
  textAlign: 'center',
}

export const ImgPreview: React.FC<ImgPreviewProps> = ({
  acceptType,
  acceptSize,
  defaultLabel,
  closeIcon,
  uploadCardStyle,
  uploadLabelStyle,
  previewCardStyle,
  previewLabelStyle,
  className = '',
  uploadClassName = '',
  previewClassName = '',
}: ImgPreviewProps) => {
  const [uploadImg, setUploadImg] = useState<string>('')
  const handleUpload = useCallback(() => {
    document.getElementById('input-image').click()
  }, [])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const isAcceptType = acceptType.includes(e.target.files[0].type)
      if (!isAcceptType) {
        return
      }
      if (e.target.files[0].size / 1024 / 1024 >= acceptSize) {
        return
      }
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        setUploadImg(reader.result as string)
      })
      reader.readAsDataURL(e.target.files[0])
    },
    [acceptType, acceptSize],
  )

  const onRemove = useCallback((e: Event) => {
    e.stopPropagation()
    setUploadImg('')
    ;(document.getElementById('input-image') as any).value = ''
  }, [])

  return (
    <ImgPreviewWrapper data-testid={'wrapper'} className={className}>
      <UploadWrapper
        data-testid={'upload-wrapper'}
        uploadCardStyle={{
          ...DEFAULT_CARD_STYLE,
          ...uploadCardStyle,
        }}
        uploadLabelStyle={{
          ...DEFAULT_LABEL_STYLE,
          ...uploadLabelStyle,
        }}
        onClick={handleUpload}
        className={uploadClassName}>
        <input
          data-testid={'upload-input'}
          onChange={onChange}
          id="input-image"
          name="media"
          accept={acceptType.join(',')}
          type="file"
          style={{ display: 'none' }}
        />
        {uploadImg ? (
          <div>
            <img className="uploaded-image" src={uploadImg} alt="" />
            {closeIcon ? (
              closeIcon
            ) : (
              <Icon className="image-remove" onClick={onRemove as () => void} iconSrc={IconRemove} size={30} />
            )}
          </div>
        ) : (
          <p data-testid={'upload-label'} className="upload-label">
            {defaultLabel}
          </p>
        )}
      </UploadWrapper>

      <PreviewWrapper
        data-testid={'preview-wrapper'}
        className={previewClassName}
        previewCardStyle={{
          ...DEFAULT_CARD_STYLE,
          ...previewCardStyle,
        }}
        previewLabelStyle={{
          ...DEFAULT_LABEL_STYLE,
          ...previewLabelStyle,
        }}>
        {uploadImg ? (
          <img data-testid={'preview-image'} className="preview-image" alt="nft-card" src={uploadImg} />
        ) : (
          <p data-testid={'preview-label'} className="preview-label">
            Upload file to preview your brand new NFT
          </p>
        )}
      </PreviewWrapper>
    </ImgPreviewWrapper>
  )
}