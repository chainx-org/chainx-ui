import React, { useCallback, useState } from 'react'
import { Icon } from '@'
import IconRemove from './icon_remove.svg'
import { ImgPreviewWrapper, PreviewWrapper, UploadWrapper } from '@/ImgPreview/styles'

export type CardStyle = {
  width?: number
  height?: number
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
}

const DEFAULT_CARD_STYLE: CardStyle = {
  width: 480,
  height: 300,
  borderRadius: '10px',
}

const DEFAULT_LABEL_STYLE: LabelStyle = {
  fontSize: 16,
  fontWeight: 500,
  color: '#999999',
  lineHeight: '22px',
  textAlign: 'center',
}

const ImgPreview: React.FC<ImgPreviewProps> = ({
  acceptType,
  acceptSize,
  defaultLabel,
  closeIcon,
  uploadCardStyle,
  uploadLabelStyle,
  previewCardStyle,
  previewLabelStyle,
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
    <ImgPreviewWrapper>
      <UploadWrapper
        uploadCardStyle={{
          ...DEFAULT_CARD_STYLE,
          ...uploadCardStyle,
        }}
        uploadLabelStyle={{
          ...DEFAULT_LABEL_STYLE,
          ...uploadLabelStyle,
        }}
        onClick={handleUpload}>
        <input
          onChange={onChange}
          id="input-image"
          name="media"
          accept="image/jpeg,image/jpg,image/png,image/gif"
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
          <p className="upload-label">{defaultLabel}</p>
        )}
      </UploadWrapper>

      <PreviewWrapper
        previewCardStyle={{
          ...DEFAULT_CARD_STYLE,
          ...previewCardStyle,
        }}
        previewLabelStyle={{
          ...DEFAULT_LABEL_STYLE,
          ...previewLabelStyle,
        }}>
        {uploadImg ? (
          <img className="preview-image" alt="nft-card" src={uploadImg} />
        ) : (
          <p className="preview-label">Upload file to preview your brand new NFT</p>
        )}
      </PreviewWrapper>
    </ImgPreviewWrapper>
  )
}

export { ImgPreview }
