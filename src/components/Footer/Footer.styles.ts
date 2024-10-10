import styled from 'styled-components'
import { device } from '../../App.styled'

const Wrapper = styled.footer`
  height: 20px;
  width: 100%;

  display: flex;

  justify-content: center;

  background: linear-gradient(135deg, rgba(0, 170, 187, 1) 0%, rgba(0, 204, 255, 1) 100%);
  color: white;

  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.desktop} {
    width: 70%;
  }
`

const StyledHeader = {
  Wrapper,
}

export default StyledHeader
