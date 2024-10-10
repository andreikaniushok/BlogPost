import styled from 'styled-components'
import { device } from '../../App.styled'

const ContentBlockWrapper = styled.div`
  width: 100%;

  /* background-color: white; */

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 30px;

  @media ${device.laptopL} {
    max-width: 1024px;
  }
`

const Wrapper = styled.div`
  width: 98%;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 30px;
`

const Title = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  font-size: 20px;
  font-weight: bold;

  @media ${device.mobileL} {
    justify-content: start;
  }
`

const CommentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 20px;
`

const WrapperTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;

  gap: 15px;

  @media ${device.mobileL} {
    justify-content: space-between;
    flex-direction: row;
  }
`

const WrapperPageButtons = styled.div`
  background-color: white;

  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;

  padding: 20px;
  border-radius: 15px;
`

const WrapperButtons = styled.div`
  background-color: white;

  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 5px;
`

const StyledContentBlock = {
  Wrapper,
  Title,
  CommentWrapper,
  WrapperTitle,
  WrapperPageButtons,
  WrapperButtons,
  ContentBlockWrapper,
}

export default StyledContentBlock
