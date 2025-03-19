import React, { FC, useState, useEffect, useMemo } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'
import Styled from './PostsBlock.styles'
import ButtonNormal from '../buttons/ButtonNormal/ButtonNormal'
import usePostList from '../../hooks/usePostList copy/usePostList'
import Post from '../Post/Post'
import { EAppRoute } from '../../routes/AppRoute'
import { IPost } from '../../interfaces/Post'
import Filters from '../../modules/common/features/Filters/Filters'
import { IFiltersConfig } from '../../modules/common/features/Filters/interfaces/FiltersLocalData/FiltersLocalData'
import { useSelector } from 'react-redux'
import { selectedFiltersData } from '../../modules/store/reducers/FiltersState.slice'

const postsFiltersConfig: IFiltersConfig = {
  posts: {
    filters: [
      {
        id: 'byAlphabetId',
        name: 'Alphabet',
        type: 'select',
        optionList: [
          { label: 'A-Z', value: 'sortByAtoZ' },
          { label: 'Z-A', value: 'sortByZtoA' },
        ],
      },
      {
        id: 'byNewId',
        name: 'New',
        type: 'select',
        optionList: [
          { label: 'New ones first', value: 'sortByNew' },
          { label: 'Old ones firs', value: 'sortByOld' },
        ],
      },
      { id: 'hiddenId', name: 'Hidden', type: 'checkbox' },
      { id: 'onlyUserPostId', name: 'Only user post', type: 'checkbox' },
      { id: 'searchId', name: 'search', type: 'search' },
    ],
  },
}

const POST_IN_PAGE = 8
const MAX_DISPLAY_PAGES = 6

const PostsBlock: FC = () => {
  const { postByUserId, handleSavePost, handleClickRemoveButton } = usePostList()

  const [sortedPosts, setSortedPosts] = useState<IPost[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isShowFilters, setIsShowFilters] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleClickShowFilters = () => {
    setIsShowFilters(true)
  }

  const handleClickCloseFilters = () => {
    setIsShowFilters(false)
  }

  const postedList = useMemo(() => {
    return Object.values(postByUserId).reduce<IPost[]>((acc, posts) => {
      acc.push(...posts)
      return acc
    }, [])
  }, [postByUserId])

  const displayedPosts = useSelector(selectedFiltersData) as IPost[]
  const postList = displayedPosts.length > 0 ? displayedPosts : postedList

  useEffect(() => {
    setSortedPosts(postList)
  }, [postList])

  const goToNextPage = () => setCurrentPage((prevPage) => prevPage + 1)
  const goToPrevPage = () => setCurrentPage((prevPage) => prevPage - 1)

  const handleClickPage = (pageNumber: number) => setCurrentPage(pageNumber)

  const totalPages = Math.ceil(sortedPosts.length / POST_IN_PAGE)
  const startPage = Math.max(1, currentPage - Math.floor(MAX_DISPLAY_PAGES / 2))
  const endPage = Math.min(totalPages, startPage + MAX_DISPLAY_PAGES - 1)

  const handlePostClick = (postId: string | number) => {
    const postIdToString = postId.toString()

    navigate(generatePath(EAppRoute.Post, { postId: postIdToString }))
  }

  return (
    <Styled.PostBlockWrapper>
      <Styled.Wrapper>
        <Styled.WrapperTitle>
          <Styled.Title>POSTS</Styled.Title>
        </Styled.WrapperTitle>

        {isShowFilters ? (
          <Styled.FilterWrapper>
            <Styled.WrapperOpenCloseButtonFilter>
              <ButtonNormal
                preset="close"
                onClick={handleClickCloseFilters}
              >
                X
              </ButtonNormal>
            </Styled.WrapperOpenCloseButtonFilter>

            <Filters
              filtersLocalDataConfig={postsFiltersConfig}
              filterData={postedList}
            />
          </Styled.FilterWrapper>
        ) : (
          <Styled.FilterWrapper>
            <Styled.WrapperOpenCloseButtonFilter>
              <ButtonNormal
                preset="select"
                onClick={handleClickShowFilters}
              >
                Filters
              </ButtonNormal>
            </Styled.WrapperOpenCloseButtonFilter>
          </Styled.FilterWrapper>
        )}

        <Styled.PostWrapper>
          {sortedPosts.slice((currentPage - 1) * POST_IN_PAGE, currentPage * POST_IN_PAGE).map((post) => (
            <Post
              key={post.id}
              onClick={handleClickRemoveButton}
              onSave={handleSavePost}
              onClickPost={() => handlePostClick(post.id)}
              prevVersion={false}
              {...post}
            />
          ))}

          {sortedPosts
            .slice((currentPage - 1) * POST_IN_PAGE, currentPage * POST_IN_PAGE)
            .filter((post) => post.isShow !== false)
            .map((post) => (
              <Post
                key={post.id}
                onClick={handleClickRemoveButton}
                onSave={handleSavePost}
                onClickPost={() => handlePostClick(post.id)}
                prevVersion={false}
                {...post}
              />
            ))}
        </Styled.PostWrapper>
        {sortedPosts.length > POST_IN_PAGE && (
          <Styled.WrapperPageButtons>
            <Styled.WrapperButtons>
              <ButtonNormal
                onClick={goToPrevPage}
                preset={'nextPrevPage'}
                disabled={currentPage === 1}
              >
                Previous Page
              </ButtonNormal>

              <Styled.WrapperNumbersButtons>
                {startPage > 1 && (
                  <>
                    <ButtonNormal
                      onClick={() => handleClickPage(1)}
                      preset={'numberPage'}
                    >
                      1
                    </ButtonNormal>
                    {startPage > 2 && (
                      <ButtonNormal
                        preset={'numberPage'}
                        disabled={true}
                      >
                        ...
                      </ButtonNormal>
                    )}
                  </>
                )}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((number) => (
                  <ButtonNormal
                    key={number}
                    onClick={() => handleClickPage(number)}
                    preset={'numberPage'}
                    disabled={number === currentPage}
                  >
                    {number}
                  </ButtonNormal>
                ))}
                {endPage < totalPages && (
                  <>
                    {endPage < totalPages - 1 && (
                      <ButtonNormal
                        preset={'numberPage'}
                        disabled={true}
                      >
                        ...
                      </ButtonNormal>
                    )}
                    <ButtonNormal
                      onClick={() => handleClickPage(totalPages)}
                      preset={'numberPage'}
                      disabled={currentPage === totalPages}
                    >
                      {totalPages}
                    </ButtonNormal>
                  </>
                )}
              </Styled.WrapperNumbersButtons>

              <ButtonNormal
                onClick={goToNextPage}
                preset={'nextPrevPage'}
                disabled={currentPage === totalPages}
              >
                Next Page
              </ButtonNormal>
            </Styled.WrapperButtons>
          </Styled.WrapperPageButtons>
        )}
      </Styled.Wrapper>
    </Styled.PostBlockWrapper>
  )
}

export default PostsBlock
