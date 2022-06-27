import styled from 'styled-components'
import { CardStyle, LabelStyle } from '@components/ImgPreview'

export const UploadWrapper = styled.div<{
  uploadCardStyle: CardStyle
  uploadLabelStyle: LabelStyle
}>`
  position: relative;
  cursor: pointer;
  border: ${({ uploadCardStyle: { border } }) => border && border};
  border-radius: ${({ uploadCardStyle: { borderRadius } }) => borderRadius};
  width: ${({ uploadCardStyle: { width } }) => width};
  height: ${({ uploadCardStyle: { height } }) => height};
  padding: ${({ uploadCardStyle: { padding } }) => padding};
  margin: ${({ uploadCardStyle: { margin } }) => margin};
  overflow: hidden;

  .uploaded-image {
    position: absolute;
    width: 100%;
  }
  .image-remove {
    position: absolute;
    right: 14px;
    top: 14px;
  }
  .upload-label {
    font-size: ${({ uploadLabelStyle: { fontSize } }) => `${fontSize}px`};
    font-weight: ${({ uploadLabelStyle: { fontWeight } }) => fontWeight};
    color: ${({ uploadLabelStyle: { color } }) => color};
    line-height: ${({ uploadLabelStyle: { lineHeight } }) => lineHeight};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    text-align: ${({ uploadLabelStyle: { textAlign } }) => textAlign};
  }
`

export const PreviewWrapper = styled.div<{
  previewCardStyle: CardStyle
  previewLabelStyle: LabelStyle
}>`
  border: ${({ previewCardStyle: { border } }) => border && border};
  border-radius: ${({ previewCardStyle: { borderRadius } }) => borderRadius};
  padding: ${({ previewCardStyle: { padding } }) => padding};
  margin: ${({ previewCardStyle: { margin } }) => margin};
  display: flex;
  align-items: center;
  justify-content: center;

  .preview-image {
    width: ${({ previewCardStyle: { width } }) => width};
    height: ${({ previewCardStyle: { height } }) => height};
  }

  .preview-label {
    width: ${({ previewCardStyle: { width } }) => width};
    font-size: ${({ previewLabelStyle: { fontSize } }) => `${fontSize}px`};
    font-weight: ${({ previewLabelStyle: { fontWeight } }) => fontWeight};
    color: ${({ previewLabelStyle: { color } }) => color};
    line-height: ${({ previewLabelStyle: { lineHeight } }) => lineHeight};
    text-align: ${({ previewLabelStyle: { textAlign } }) => textAlign};
  }
`

export const ImgPreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
