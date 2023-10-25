import styled, { css, keyframes } from '@magister_zito/vue3-styled-components'
import { ImageSize, prefix } from '../styles'

export const Classes = {
  vcSpinWrapper: `${prefix}spin-wrapper`,
  vcSpin: `${prefix}spin`,
  vcSpinContent: `${prefix}spin-content`,
  vcSpinBlur: `${prefix}spin-blur`,
  vcSpinNestedLoading: `${prefix}spin-nested-loading`,
  vcSpinDot: `${prefix}spin-dot`,
  vcSpinImg: `${prefix}spin-img`
}

const animation = keyframes`
  100% {
    transform: rotate(405deg);
  }
`

export const StyledVcSpinWrapper = styled.div`
  padding: 5px;
  .${Classes.vcSpinNestedLoading} {
    position: relative;
    .${Classes.vcSpin} {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      z-index: 4;
      display: block;
      width: 100%;
      height: 100%;
      max-height: 400px;
    }
    .${Classes.vcSpinImg} {
      position: absolute;
      top: 50%;
      right: 50%;
      bottom: 50%;
      left: 50%;
    }
    .${Classes.vcSpinDot} {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .${Classes.vcSpinContent} {
    position: relative;
    transition: opacity 0.3s;
    &.${Classes.vcSpinBlur} {
      clear: both;
      opacity: 0.5;
      user-select: none;
      pointer-events: none;
    }
  }
  .${Classes.vcSpinImg}.spinning {
    transform: rotate(45deg);
    animation-name: ${animation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`

export const StyledVcSpinImg = styled('img', { size: String, margin: String })`
  width: ${(props) => ImageSize[props.size as keyof typeof ImageSize]};
  height: ${(props) => ImageSize[props.size as keyof typeof ImageSize]};
  margin: -${(props) => props.margin as string};
`
