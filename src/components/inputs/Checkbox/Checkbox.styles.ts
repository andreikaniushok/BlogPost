import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  gap: 5px;
`

const Input = styled.input`
  height: 20px;
  width: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.span`
  font-size: 15px;
  font-weight: bold;
`

const StyledCheckbox = {
  Wrapper,
  Input,
  Label,
}

export default StyledCheckbox
