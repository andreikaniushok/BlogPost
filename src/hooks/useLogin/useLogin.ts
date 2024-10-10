import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { AccountActions, AccountSelectors } from '../../modules/store/reducers/Account.slice'
import useLoginStore from './hooks/useLoginStore/useLoginStore'
import { IUser } from '../../interfaces/User'

const useLogin = () => {
  const { getStoredData, saveUser, saveCurrentUser } = useLoginStore()

  const dispatch = useAppDispatch()

  const currentUser = useAppSelector(AccountSelectors.selectCurrentUser)

  const closeLoginForm = () => {
    dispatch(AccountActions.closeLoginForm())
  }

  useEffect(() => {
    const storedData = getStoredData()

    dispatch(AccountActions.addCurrentUser(storedData.currentUser))
  }, [])

  const addUser = (user: IUser): void => {
    saveUser(user)
    dispatch(AccountActions.closeLoginForm())
  }

  const addCurrentUser = (currentUser: IUser | null): void => {
    dispatch(AccountActions.addCurrentUser(currentUser))

    saveCurrentUser(currentUser)
  }

  const cleanCurrentUser = (): void => {
    setTimeout(() => {
      saveCurrentUser(null)

      dispatch(AccountActions.addCurrentUser(null))
    }, 0)
  }

  const getUser = (email: string, password: string): IUser | null => {
    const { userList } = getStoredData()

    const foundUser = userList.find((user) => {
      return user.email === email && user.password === password
    })

    if (foundUser) return foundUser
    else return null
  }

  return {
    currentUser,
    addUser,
    getUser,
    addCurrentUser,
    closeLoginForm,
    cleanCurrentUser,
  }
}

export default useLogin
