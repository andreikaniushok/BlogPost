import React, { FC } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PostsBlock from '../../components/PostBlock/PostsBlock'
import Title from '../../components/Title/Title'
import Styled from './PostPage.styles'

const PostsPage: FC = () => {
  return (
    <>
      <Styled.Wrapper>
        <Header homeHeader={true} />

        <Title />

        <PostsBlock />

        <Footer />
      </Styled.Wrapper>
    </>
  )
}

export default PostsPage
