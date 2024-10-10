import React, { FC, useState, useEffect, useMemo } from 'react'
import Styled from './ContentBlock.styles'
import useCommentList from '../../hooks/useCommentList/useCommentList'
import Comment from '../Comment/Comment'
import Select, { ISelectOption } from '../../modules/common/components/Select/Select'
import ButtonNormal from '../buttons/ButtonNormal/ButtonNormal'
import { IComment } from '../../interfaces/Comment'

const selectOptionsList: ISelectOption[] = [
  { label: 'Sort by new', value: 'new' },
  { label: 'Sort by old', value: 'old' },
  { label: 'Sort by Title', value: 'title' },
  { label: 'Sort none', value: 'Sort none' },
]

const COMMENTS_IN_PAGE = 2

interface IProps {
  postId: string
}

const CommentBlock: FC<IProps> = ({ postId }) => {
  const { commentsByPostId, handleSaveComment, handleClickRemoveButton } = useCommentList()

  const commentList: IComment[] = useMemo(() => {
    if (commentsByPostId && commentsByPostId[postId]) {
      return commentsByPostId[postId] || []
    } else {
      return []
    }
  }, [commentsByPostId, postId])

  console.log('POST_ID', postId)

  const [selectedOption, setSelectedOption] = useState<ISelectOption>({ label: 'Sort none', value: 'Sort none' })
  const [sortedComments, setSortedComments] = useState<IComment[]>([])
  const [shownCommentsCount, setShownCommentsCount] = useState<number>(COMMENTS_IN_PAGE)

  useEffect(() => {
    if (selectedOption.value === 'new') {
      setSortedComments(
        [...commentList].sort((a, b) => {
          const dateA = new Date(a.date.year, a.date.month, a.date.dayOfMonth, a.time.hours, a.time.minutes).getTime()
          const dateB = new Date(b.date.year, b.date.month, b.date.dayOfMonth, b.time.hours, b.time.minutes).getTime()
          return dateA - dateB
        }),
      )
    } else if (selectedOption.value === 'old') {
      setSortedComments(
        [...commentList].sort((a, b) => {
          const dateA = new Date(a.date.year, a.date.month, a.date.dayOfMonth, a.time.hours, a.time.minutes).getTime()
          const dateB = new Date(b.date.year, b.date.month, b.date.dayOfMonth, b.time.hours, b.time.minutes).getTime()
          return dateB - dateA
        }),
      )
    } else if (selectedOption.value === 'title') {
      setSortedComments([...commentList].sort((a, b) => a.title.localeCompare(b.title)))
    } else {
      setSortedComments([...commentList])
    }
  }, [selectedOption, commentList])

  const handleShowMoreComments = () => {
    setShownCommentsCount((prevCount) => prevCount + COMMENTS_IN_PAGE)
  }

  const handleSelect = (option: ISelectOption) => {
    setSelectedOption(option)
  }

  return (
    // <Styled.ContentBlockWrapper>
    //   <Styled.Wrapper>
    //     <Styled.WrapperTitle>
    //       <Styled.Title>COMMENTS</Styled.Title>

    //       <Select
    //         optionList={selectOptionsList}
    //         selectedOption={selectedOption}
    //         onSelect={handleSelect}
    //       />
    //     </Styled.WrapperTitle>

    //     <Styled.CommentWrapper>
    //       {sortedComments.slice(0, shownCommentsCount).map((comment) => (
    //         <Comment
    //           key={comment.id}
    //           onClick={handleClickRemoveButton}
    //           onSave={handleSaveComment}
    //           {...comment}
    //         />
    //       ))}

    //       {shownCommentsCount < sortedComments.length && (
    //         <ButtonNormal
    //           preset="showMore"
    //           onClick={handleShowMoreComments}
    //         >
    //           Show More
    //         </ButtonNormal>
    //       )}
    //     </Styled.CommentWrapper>
    //   </Styled.Wrapper>
    // </Styled.ContentBlockWrapper>
    <>
      {commentList && commentList.length > 0 && (
        <Styled.ContentBlockWrapper>
          <Styled.Wrapper>
            <Styled.WrapperTitle>
              <Styled.Title>COMMENTS</Styled.Title>

              <Select
                optionList={selectOptionsList}
                selectedOption={selectedOption}
                onSelect={handleSelect}
              />
            </Styled.WrapperTitle>

            <Styled.CommentWrapper>
              {sortedComments.slice(0, shownCommentsCount).map((comment) => (
                <Comment
                  key={comment.id}
                  onClick={handleClickRemoveButton}
                  onSave={handleSaveComment}
                  {...comment}
                />
              ))}

              {shownCommentsCount < sortedComments.length && (
                <ButtonNormal
                  preset="showMore"
                  onClick={handleShowMoreComments}
                >
                  Show More
                </ButtonNormal>
              )}
            </Styled.CommentWrapper>
          </Styled.Wrapper>
        </Styled.ContentBlockWrapper>
      )}
    </>
  )
}

export default CommentBlock
