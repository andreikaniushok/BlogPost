import styled from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const ShadowBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginForm = styled.div`
  z-index: 2;
`

export const Wrapper = styled.div`
  width: 100%;
`

export const ButtonCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const LoginHeader = styled.div`
  height: 50px;
  width: 80%;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const LogoutHeader = styled.div`
  height: 50px;
  width: 80%;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
