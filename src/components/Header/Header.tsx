import { FC, useEffect, useState } from 'react'
import Styled from './Header.styles'
import ButtonNormal from '../buttons/ButtonNormal/ButtonNormal'
import useLogin from '../../hooks/useLogin/useLogin'
import { useAppSelector } from '../../app/hooks'
import { AccountSelectors } from '../../modules/store/reducers/Account.slice'
import uploadPng from './assets/images/logo.png'
import PostForm from '../PostForm/PostForm'
import usePostList from '../../hooks/usePostList copy/usePostList'
import { useNavigate } from 'react-router-dom'
import { EAppRoute } from '../../routes/AppRoute'

import { size } from '../../App.styled'

interface IProps {
  homeHeader: boolean
}

const Header: FC<IProps> = ({ homeHeader }) => {
  const navigate = useNavigate()

  const { cleanCurrentUser } = useLogin()

  const { addPost } = usePostList()

  const currentUser = useAppSelector(AccountSelectors.selectCurrentUser)

  const [isOpenPostForm, setIsOpenPostForm] = useState<boolean>(false)

  const checkIfNeedToShowLogout = (): boolean => {
    if (currentUser !== null) return true

    return false
  }

  const handleClickOpenPostForm = () => {
    setIsOpenPostForm(true)
  }

  const handleClickClosePostForm = () => {
    setIsOpenPostForm(false)
  }

  const handleClickLogin = () => {
    navigate(EAppRoute.Login)
  }

  const goToHomePage = () => {
    navigate(EAppRoute.Posts)
  }

  const goToUserPostsPage = () => {
    navigate(EAppRoute.UserPosts)
  }

  return (
    <>
      {homeHeader ? (
        checkIfNeedToShowLogout() ? (
          <Styled.Wrapper>
            <Styled.LogoutHeader>
              <Styled.Img
                src={uploadPng}
                alt=""
                onClick={goToHomePage}
              />
              <Styled.ButtonWrapper>
                <ButtonNormal
                  preset="header"
                  onClick={goToHomePage}
                >
                  Home
                </ButtonNormal>

                {/* <ButtonNormal
                  preset="header"
                  onClick={goToFiltersPage}
                >
                  Filters
                </ButtonNormal> */}

                <ButtonNormal
                  preset="header"
                  onClick={goToUserPostsPage}
                >
                  My posts
                </ButtonNormal>
              </Styled.ButtonWrapper>

              {/* {!isOpenPostForm ? (
                <ButtonNormal
                  preset="addHeader"
                  onClick={handleClickOpenPostForm}
                >
                  Add Post
                </ButtonNormal>
              ) : (
                <Styled.ShadowBackground onClick={handleClickClosePostForm}>
                  <Styled.LoginForm onClick={(e) => e.stopPropagation()}>
                    <Styled.ButtonCloseWrapper>
                      <ButtonNormal
                        preset="close"
                        onClick={handleClickClosePostForm}
                      >
                        Close
                      </ButtonNormal>
                    </Styled.ButtonCloseWrapper>

                    <PostForm addPost={addPost} />
                  </Styled.LoginForm>
                </Styled.ShadowBackground>
              )} */}

              <Styled.CurrentUserWrapper>
                <Styled.UserName>
                  <b>Hello: </b>
                  {currentUser?.firstName}
                </Styled.UserName>

                <ButtonNormal
                  preset="logout"
                  onClick={cleanCurrentUser}
                >
                  Logout
                </ButtonNormal>
              </Styled.CurrentUserWrapper>
            </Styled.LogoutHeader>
          </Styled.Wrapper>
        ) : (
          <Styled.Wrapper>
            <Styled.LoginHeader>
              <Styled.Img
                src={uploadPng}
                alt=""
                onClick={goToHomePage}
              />
              <Styled.ButtonWrapper>
                <ButtonNormal
                  preset="header"
                  onClick={goToHomePage}
                >
                  Home
                </ButtonNormal>

                {/* <ButtonNormal
                  preset="header"
                  onClick={goToFiltersPage}
                >
                  Filters
                </ButtonNormal> */}
              </Styled.ButtonWrapper>
              <Styled.CurrentUserWrapper>
                <ButtonNormal
                  preset="login"
                  onClick={handleClickLogin}
                >
                  LogIn
                </ButtonNormal>
              </Styled.CurrentUserWrapper>
            </Styled.LoginHeader>
          </Styled.Wrapper>
        )
      ) : checkIfNeedToShowLogout() ? (
        <Styled.Wrapper>
          <Styled.LogoutHeader>
            <Styled.Img
              src={uploadPng}
              alt=""
              onClick={goToHomePage}
            />
            <Styled.ButtonWrapper>
              <ButtonNormal
                preset="header"
                onClick={goToHomePage}
              >
                Home
              </ButtonNormal>

              {/* <ButtonNormal
                preset="header"
                onClick={goToFiltersPage}
              >
                Filters
              </ButtonNormal> */}

              <ButtonNormal
                preset="header"
                onClick={goToUserPostsPage}
              >
                My posts
              </ButtonNormal>
            </Styled.ButtonWrapper>

            <Styled.CurrentUserWrapper>
              <Styled.UserName>
                <b>Hello: </b>
                {currentUser?.firstName}
              </Styled.UserName>

              <ButtonNormal
                preset="logout"
                onClick={cleanCurrentUser}
              >
                Logout
              </ButtonNormal>
            </Styled.CurrentUserWrapper>
          </Styled.LogoutHeader>
        </Styled.Wrapper>
      ) : (
        <Styled.Wrapper>
          <Styled.LoginHeader>
            <Styled.Img
              src={uploadPng}
              alt=""
              onClick={goToHomePage}
            />
            <Styled.ButtonWrapper>
              <ButtonNormal
                preset="header"
                onClick={goToHomePage}
              >
                Home
              </ButtonNormal>

              {/* <ButtonNormal
                preset="header"
                onClick={goToFiltersPage}
              >
                Filters
              </ButtonNormal> */}
            </Styled.ButtonWrapper>
            <Styled.CurrentUserWrapper>
              <ButtonNormal
                preset="login"
                onClick={handleClickLogin}
              >
                LogIn
              </ButtonNormal>
            </Styled.CurrentUserWrapper>
          </Styled.LoginHeader>
        </Styled.Wrapper>
      )}
    </>
  )
}

export default Header
