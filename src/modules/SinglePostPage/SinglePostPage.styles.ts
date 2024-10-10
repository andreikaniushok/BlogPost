import styled from 'styled-components'
import { device } from '../../App.styled'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;

  gap: 10px;

  @media ${device.laptopL} {
    max-width: 1024px;
  }
`

const PostWrapper = styled.div`
  height: auto;
  width: 98%;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: white; */

  /* @media ${device.laptopL} {
    max-width: 1024px;
  } */
`

const StyledSinglePostPage = {
  Wrapper,
  PostWrapper,
}

export default StyledSinglePostPage
