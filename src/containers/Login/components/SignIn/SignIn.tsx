import React, { FC, FormEvent, useState } from 'react'
import useLogin from '../../../../hooks/useLogin/useLogin'
import Styled from './SygnIn.styles'
import ButtonNormal from '../../../../components/buttons/ButtonNormal/ButtonNormal'
import { AccountActions } from '../../../../modules/store/reducers/Account.slice'
import { useAppDispatch } from '../../../../app/hooks'
import useLoginValidator from '../../../../hooks/useLogin/hooks/useLoginValidator/useLoginValidator'
import NormalInput from '../../../../components/inputs/NormalInput/NormalInput'
import { useNavigate } from 'react-router-dom'
import { EAppRoute } from '../../../../routes/AppRoute'
import { IUser } from '../../../../interfaces/User'

const SignIn: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { getUser, addCurrentUser } = useLogin()
  const { checkIfExistThisUser } = useLoginValidator()

  const [editableUsername, setEditableUsername] = useState<string>('')
  const [editablePassword, setEditablePassword] = useState<string>('')

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    const ourUser: IUser | null = getUser(editableUsername, editablePassword)
    addCurrentUser(ourUser)
    dispatch(AccountActions.closeLoginForm())
    checkIfExistThisUser(ourUser, editableUsername)

    if (ourUser !== null) {
      navigate(EAppRoute.Posts)
    }
  }

  const handleSignUpClick = () => {
    dispatch(AccountActions.showSignUpForm())
  }

  const handleClickToHomePage = () => {
    navigate(EAppRoute.Posts)
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <NormalInput
        label="Username"
        value={editableUsername}
        type={'email'}
        onChange={setEditableUsername}
      />

      <NormalInput
        label="Password"
        value={editablePassword}
        type={'password'}
        onChange={setEditablePassword}
      />

      <ButtonNormal preset="singIn">Sing In</ButtonNormal>

      <ButtonNormal
        preset="singUp"
        onClick={handleSignUpClick}
      >
        Create Account
      </ButtonNormal>

      <Styled.backToHomePage onClick={handleClickToHomePage}>Back to home page...</Styled.backToHomePage>
    </Styled.Form>
  )
}

export default SignIn
