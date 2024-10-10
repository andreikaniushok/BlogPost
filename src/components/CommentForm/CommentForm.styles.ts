import styled from 'styled-components'
import { device } from '../../App.styled'

const CommentFormWrapper = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  @media ${device.laptopL} {
    max-width: 1024px;
  }
`

const Wrapper = styled.div`
  height: auto;
  width: 98%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 24px;
  padding-bottom: 24px;
  /* border-radius: 16px; */

  /* background-color: white; */
`

const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`

const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    justify-content: start;
  }
`

const StyledCommentForm = {
  Wrapper,
  Form,
  ButtonWrapper,
  CommentFormWrapper,
}

export default StyledCommentForm
