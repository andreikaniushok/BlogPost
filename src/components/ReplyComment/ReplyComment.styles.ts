import styled from 'styled-components'
import { device } from '../../App.styled'

const Wrapper = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  border: 1.5px solid #ddd;

  border-radius: 5px;

  gap: 10px;

  background-color: white;
`

const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;

  text-align: justify;
`

const Username = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  font-style: italic;
  text-transform: capitalize;
`

const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    justify-content: flex-end;
  }
`

const WrapperImg = styled.div`
  max-width: 100%;
  height: auto;

  position: relative;
`

const Img = styled.img`
  max-width: 120px;
  width: 100%;
  height: auto;

  position: relative;

  z-index: 1;
`

const ImgSave = styled.img`
  height: 15%;
  width: 15%;

  position: absolute;

  right: 0;
  bottom: 3%;

  z-index: 2;
`

const WrapperDateAndTime = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;
  align-items: end;

  text-transform: capitalize;
`

const Date = styled.div`
  font-size: 10px;
`

const Time = styled.div`
  font-size: 10px;
`

const StyledReplyComment = {
  Wrapper,
  ButtonWrapper,
  Username,
  Content,
  Img,
  WrapperImg,
  ImgSave,
  Date,
  Time,
  WrapperDateAndTime,
}

export default StyledReplyComment
