import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  width: 20%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9998;
`

const Notification = styled.div`
  height: 70%;
  width: 100%;

  font-size: 100%;

  display: flex;
  justify-content: center;

  padding: 8px 12px;
  border-radius: 15px;

  border: 1px solid green;
  color: green;
  background-color: white;

  pointer-events: auto;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;

  pointer-events: auto;
`

const NotifyWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`

const SuccessNotify = {
  Wrapper,
  Notification,
  ButtonWrapper,
  NotifyWrapper,
}

export default SuccessNotify
