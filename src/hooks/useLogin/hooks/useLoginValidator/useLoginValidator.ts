import useNotification from '../../../useNotification/useNotification'
import useLogin from '../../useLogin'
import { ENotificationType, INotification } from '../../../../modules/store/reducers/Notification.slice'
import { v4 } from 'uuid'
import { IUser } from '../../../../interfaces/User'

const useLoginValidator = () => {
  const { addUser } = useLogin()
  const { addNotification } = useNotification()

  const checkIfExistThisUser = (user: IUser | null, userEmail: string) => {
    if (user?.email !== userEmail) return addNotification({ id: v4(), type: ENotificationType.Error, title: 'Error' })
    else return addNotification({ id: v4(), type: ENotificationType.Success, title: 'Success' })
  }

  const checkIfNeedToRegisterThisUser = (ourUser: IUser | null, newUser: IUser, email: string) => {
    if (ourUser?.email === email) return addNotification({ id: v4(), type: ENotificationType.Error, title: 'Error' })

    return addUser(newUser), addNotification({ id: v4(), type: ENotificationType.Success, title: 'Success' })
  }

  return {
    checkIfExistThisUser,
    checkIfNeedToRegisterThisUser,
  }
}

export default useLoginValidator
