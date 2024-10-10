import styled from 'styled-components'
import { device } from '../../App.styled'

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  align-self: flex-start;

  /* background-color: #1fa8ad; */

  background: linear-gradient(to right, rgba(9, 9, 121, 1) 0%, rgba(2, 0, 36, 1) 0%, rgba(0, 212, 255, 1) 100%);

  @media ${device.laptopL} {
    max-width: 1024px;
  }
`

const LoginHeader = styled.div`
  height: auto;
  width: 98%;

  flex-direction: column;

  gap: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  font-size: 80%;

  @media ${device.mobileS} {
    gap: 10px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 20px;
  }
`

const LogoutHeader = styled.div`
  height: auto;
  width: 98%;

  flex-direction: column;

  gap: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  font-size: 80%;

  @media ${device.mobileS} {
    gap: 10px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
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

const ButtonCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const LoginForm = styled.div`
  width: 100%;

  border-radius: 100px;

  z-index: 2;
`

const CurrentUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const UserName = styled.div`
  color: white;
`
const Img = styled.img`
  height: 60px;
  width: auto;

  border-radius: 15px;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px white;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  @media ${device.mobileL} {
    align-items: center;
    flex-direction: row;

    gap: 15px;
  }
`

const StyledHeader = {
  Wrapper,
  device,
  ShadowBackground,
  LoginForm,
  ButtonCloseWrapper,
  LogoutHeader,
  LoginHeader,
  UserName,
  Img,
  ButtonWrapper,
  CurrentUserWrapper,
}

export default StyledHeader
