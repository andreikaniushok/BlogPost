import styled from 'styled-components'
import bgTitle from './assets/images/bgTitle.jpg'
import { device } from '../../App.styled'

const Wrapper = styled.div`
  height: 200px;
  width: 100%;

  max-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;

  padding-top: 24px;
  padding-bottom: 24px;

  background: linear-gradient(to right, rgba(9, 9, 121, 1) 0%, rgba(2, 0, 36, 1) 0%, rgba(0, 212, 255, 1) 100%);

  background-size: cover;

  @media ${device.laptopL} {
    max-width: 1024px;
  }
`

const Title = styled.div`
  width: 98%;

  font-weight: bold;
  font-size: 200%;
  text-align: center;

  color: white;

  @media ${device.desktop} {
    font-size: 370%;
  }
`

const Text = styled.div`
  width: 90%;

  text-align: center;

  color: white;

  font-size: 120%;

  @media ${device.desktop} {
    font-size: 270%;
  }
`

const ShadowBackground = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.3);

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: end;
`

const LoginForm = styled.div`
  width: 100%;

  border-radius: 100px;

  z-index: 2;
`

const ButtonCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const styledTitle = {
  Wrapper,
  Text,
  Title,
  ShadowBackground,
  LoginForm,
  ButtonCloseWrapper,
}

export default styledTitle
