import styled from 'styled-components'

const Form = styled.form`
  height: auto;
  width: 300px;

  background-color: #fff;
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;

  gap: 10px;
`

const backToHomePage = styled.div`
  font-size: 80%;

  color: blue;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const StyledSignIn = {
  Form,
  backToHomePage,
}

export default StyledSignIn
