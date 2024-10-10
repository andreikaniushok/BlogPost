import { ChangeEvent, FC } from 'react'
import Styled from './NormalInput.styles'

interface IProps {
  label?: string
  value?: string
  placeholder?: string
  type: string
  onChange: (value: string) => void
}

const NormalInput: FC<IProps> = ({ label, placeholder, type, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value)
  }

  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>

      <Styled.Input
        placeholder={placeholder}
        required
        type={type}
        value={value}
        onChange={handleChange}
      ></Styled.Input>
    </Styled.Wrapper>
  )
}

export default NormalInput
