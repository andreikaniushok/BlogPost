import React, { FC, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginPage from './modules/LoginPage/LoginPage'
import { EAppRoute } from './routes/AppRoute'
import { useAppSelector } from './app/hooks'
import { AccountSelectors } from './modules/store/reducers/Account.slice'
import Notification from './containers/Notification/Notification'
import useNotification from './hooks/useNotification/useNotification'
import Styled from './App.styled'
import SinglePostPage from './modules/SinglePostPage/SinglePostPage'
import { PostsPage } from './modules'
import { UserPostsPage } from './modules/UserPostsPage'

const App: FC = () => {
  const navigate = useNavigate()
  const currentUser = useAppSelector(AccountSelectors.selectCurrentUser)

  const { handleClickDeleteNotification, notificationList } = useNotification()

  useEffect(() => {
    if (currentUser === null) {
      navigate(EAppRoute.Posts)
    }

    if (currentUser !== null) {
      navigate(EAppRoute.Posts)
    }
  }, [currentUser?.email])

  return (
    <Styled.GeneralWrapper>
      <Styled.Notification>
        {notificationList.map((notification) => (
          <Notification
            key={notification.id}
            notification={notification}
            onClick={handleClickDeleteNotification}
            {...notification}
          />
        ))}
      </Styled.Notification>

      <Routes>
        <Route
          path={EAppRoute.Posts}
          element={<PostsPage />}
        />

        <Route
          path={EAppRoute.Login}
          element={<LoginPage />}
        />

        <Route
          path={EAppRoute.Post}
          element={<SinglePostPage />}
        />

        <Route
          path={EAppRoute.UserPosts}
          element={<UserPostsPage />}
        />
      </Routes>
    </Styled.GeneralWrapper>
  )
}

export default App
