import React, { FC, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from '../../interfaces/Post'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Post from '../../components/Post/Post'
import useCommentList from '../../hooks/useCommentList/useCommentList'
import CommentForm from '../../components/CommentForm/CommentForm'
import usePostList from '../../hooks/usePostList copy/usePostList'
import CommentBlock from '../../components/CommentBlock/CommentBlock'
import Styled from './SinglePostPage.styles'

const SinglePostPage: FC = () => {
  const { postId } = useParams<{ postId?: string }>()

  const { addComment } = useCommentList()

  const { postByUserId, handleSavePost, handleClickRemoveButton } = usePostList()
  const [post, setPost] = useState<IPost>()

  const postList = useMemo(() => {
    return Object.values(postByUserId).reduce<IPost[]>((acc, posts) => {
      acc.push(...posts)

      return acc
    }, [])
  }, [postByUserId])

  useEffect(() => {
    const foundPost = postList.find((post) => post.id.toString() === postId)

    setPost(foundPost)
  }, [postId, postList])

  return (
    <>
      {post && (
        <>
          <Styled.Wrapper>
            <Header homeHeader={false} />

            <Styled.PostWrapper>
              <Post
                key={post.id}
                onClick={handleClickRemoveButton}
                onSave={handleSavePost}
                onClickPost={() => post.id}
                prevVersion={true}
                {...post}
              />
            </Styled.PostWrapper>

            {postId && (
              <CommentForm
                addComment={addComment}
                postId={postId}
              />
            )}
            {postId && <CommentBlock postId={postId} />}

            <Footer />
          </Styled.Wrapper>
        </>
      )}
    </>
  )
}

export default SinglePostPage
