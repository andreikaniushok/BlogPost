import React, { useState } from 'react'
import Styled from './Title.styles'
import ButtonNormal from '../buttons/ButtonNormal/ButtonNormal'
import PostForm from '../PostForm/PostForm'
import usePostList from '../../hooks/usePostList copy/usePostList'
import { useAppSelector } from '../../app/hooks'
import { AccountSelectors } from '../../modules/store/reducers/Account.slice'

const Title = () => {
  const currentUser = useAppSelector(AccountSelectors.selectCurrentUser)
  const { addPost } = usePostList()
  const [isOpenPostForm, setIsOpenPostForm] = useState<boolean>(false)

  const handleClickOpenPostForm = () => {
    setIsOpenPostForm(true)
  }

  const handleClickClosePostForm = () => {
    setIsOpenPostForm(false)
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>BLOG POST</Styled.Title>
      <Styled.Text>Tickle Your Mind: Funny Blog Punchlines Where Ideas Meet Reality!</Styled.Text>

      {currentUser ? (
        <>
          {!isOpenPostForm ? (
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
                    X
                  </ButtonNormal>
                </Styled.ButtonCloseWrapper>

                <PostForm addPost={addPost} />
              </Styled.LoginForm>
            </Styled.ShadowBackground>
          )}
        </>
      ) : null}
    </Styled.Wrapper>
  )
}

export default Title
