import styled from '@magister_zito/vue3-styled-components'
import { FlexWrapper, prefix } from '../styles'

export const Classes = {
  vcEmptyWrapper: `${prefix}empty-wrapper`,
  vcEmptyImg: `${prefix}empty-img`,
  vcEmptyTips: `${prefix}empty-tips`
}
export const StyledVcEmptyWrapper = styled(FlexWrapper)`
  flex-direction: column;
  pointer-events: none;
  height: 200px;
  color: #99a3b3;

  .${Classes.vcEmptyImg} {
    width: 50px;
    height: 50px;
  }

  .${Classes.vcEmptyTips} {
    font-size: 12px;
    margin-top: 15px;
    text-align: center;
  }
`
