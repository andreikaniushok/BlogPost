import React, { FC, useEffect } from 'react'
import Styled from './SuccessNotify.styles'
import ButtonNormal from '../../../../components/buttons/ButtonNormal/ButtonNormal'

interface IProps {
  title: string | undefined
  onClick: () => void
}

const SuccessNotify: FC<IProps> = ({ title, onClick }) => {
  return (
    <Styled.Wrapper>
      <Styled.NotifyWrapper>
        <Styled.Notification>{title}</Styled.Notification>
        <Styled.ButtonWrapper>
          <ButtonNormal
            onClick={onClick}
            preset="close"
          >
            X
          </ButtonNormal>
        </Styled.ButtonWrapper>
      </Styled.NotifyWrapper>
    </Styled.Wrapper>
  )
}

export default SuccessNotify
