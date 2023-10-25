import styled from '@magister_zito/vue3-styled-components'

export const FontSize = {
  small: '12px',
  middle: '16px',
  large: '20px'
} as const
export const ImageSize = {
  small: '18px',
  middle: '24px',
  large: '36px'
} as const

export const prefix = 'vc-'

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
