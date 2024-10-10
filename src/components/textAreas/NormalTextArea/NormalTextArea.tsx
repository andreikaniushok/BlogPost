import { ChangeEvent, FC } from 'react'
import Styled from './NormalTextArea.styles'

interface IProps {
  label: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

const NormalTextArea: FC<IProps> = ({ label, value, placeholder, onChange }) => {
  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(e.target.value)
  }

  return (
    <Styled.Wrapper>
      <Styled.Span>{label}</Styled.Span>

      <Styled.TextArea
        placeholder={placeholder}
        required
        maxLength={400}
        value={value}
        onChange={handleChangeContent}
      />
    </Styled.Wrapper>
  )
}

export default NormalTextArea
