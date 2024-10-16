import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IPost } from '../../../interfaces/Post'
import { TRootState } from '../../../app/store'

interface IPostReduxState {
  postByUserId: {
    [userId: string]: IPost[]
  }
}

const initialState: IPostReduxState = {
  postByUserId: {},
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
  } catch (error) {
    throw error
  }
})

const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, { payload: { userId, post } }: PayloadAction<{ userId: string; post: IPost }>) => {
      if (!state.postByUserId[userId]) {
        state.postByUserId[userId] = []
      }

      state.postByUserId[userId].push(post)
    },

    deletePost: (state, { payload }: PayloadAction<{ postId: string | number; userId: string }>) => {
      const { postId, userId } = payload

      if (state.postByUserId[userId]) {
        state.postByUserId[userId] = state.postByUserId[userId].filter((post) => post.id !== postId)
      }
    },

    savePost: (state, { payload }: PayloadAction<IPost>) => {
      const { userId } = payload

      if (state.postByUserId[userId]) {
        state.postByUserId[userId] = state.postByUserId[userId].map((post) =>
          post.id === payload.id ? { ...payload } : post,
        )
      }
    },

    addPostsByUserId: (state, { payload }: PayloadAction<{ userId: string; posts: IPost[] }>) => {
      const { userId, posts } = payload
      state.postByUserId[userId] = posts
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      const postsFromServer = action.payload

      for (const post of postsFromServer) {
        const userId = post.userId

        if (!state.postByUserId[userId]) {
          state.postByUserId[userId] = []
        }

        const existingPostIndex = state.postByUserId[userId].findIndex((p) => p.id === post.id)

        if (existingPostIndex === -1) {
          state.postByUserId[userId].push(post)
        }
      }
    })
  },
})

export const selectPostByUserId = (state: TRootState) => state.posts.postByUserId

export const PostsActions = PostSlice.actions

const PostsReducer = PostSlice.reducer

export default PostsReducer
