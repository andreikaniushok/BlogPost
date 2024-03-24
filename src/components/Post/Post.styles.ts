import styled, { css } from 'styled-components'
import { device } from '../../App.styled'

const Wrapper = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(21, 111, 230, 0.3);

  padding: 20px;
  border-radius: 15px;

  gap: 10px;

  background-color: rgba(240, 243, 248, 0.3);
`

const PrevWrapper = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid rgba(21, 111, 230, 0.3);

  padding: 20px;
  border-radius: 15px;

  gap: 10px;

  background-color: rgba(240, 243, 248, 0.3);

  cursor: pointer;
`

const Title = styled.div`
  width: 100%;

  display: flex;
  justify-content: start;

  font-weight: bold;
  text-transform: uppercase;
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

  color: rgb(154, 161, 168);
`

const Time = styled.div`
  font-size: 10px;

  color: rgb(154, 161, 168);
`

const StyledPost = {
  Wrapper,
  ButtonWrapper,
  Username,
  Content,
  Title,
  WrapperImg,
  Img,
  ImgSave,
  WrapperDateAndTime,
  Date,
  Time,
  PrevWrapper,
}

export default StyledPost
