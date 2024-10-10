import styled, { css } from 'styled-components'

// Пресет для кнопки "Add"
const addPreset = css`
  height: 30%;
  width: 100px;

  border-radius: 8px;

  padding: 4px 6px;

  font-weight: bold;
  font-size: 80%;

  background-color: rgb(22, 138, 184);
  color: white;

  box-shadow:
    0 8px 16px 0 rgba(0, 0, 0, 0),
    0 6px 20px 0 rgba(0, 0, 0, 0);

  cursor: pointer;

  &:hover {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px rgb(22, 138, 184);
  }
`

const addPostInTitlePreset = css`
  height: 30px;
  width: 100px;

  border-radius: 40px;

  /* padding: 6px; */

  font-weight: bold;
  font-size: 100%;

  background-color: white;
  color: rgb(19, 86, 126);

  cursor: pointer;

  &:hover {
    /* text-decoration: underline; */
    background-color: rgb(22, 138, 184);
    color: white;

    box-shadow: 0 0 0 2px white;
  }
`

// Пресет для кнопок "Header"
const headerPreset = css`
  height: 30%;
  width: auto;

  border-radius: 8px;

  font-weight: bold;
  font-size: 100%;

  background-color: rgba(0, 0, 0, 0);
  color: white;

  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

// Пресет для кнопки "Delete"
const deletePreset = css`
  height: 20px;
  width: 50px;

  border-radius: 8px;

  padding: 4px 6px;
  margin: 3px;

  border: 1px solid rgb(164, 46, 22);

  background-color: white;
  color: rgb(164, 46, 22);

  font-weight: bold;

  font-size: 10px;

  cursor: pointer;

  &:hover {
    background-color: rgb(164, 46, 22);
    color: white;
  }
`

// Пресет для кнопки "Edit"
const editPreset = css`
  height: 20px;
  width: 50px;

  border-radius: 8px;

  padding: 4px 6px;
  margin: 3px;

  border: 1px solid rgb(22, 138, 184);

  background-color: white;
  color: rgb(22, 138, 184);

  font-weight: bold;

  font-size: 10px;

  cursor: pointer;

  &:hover {
    background-color: rgb(22, 138, 184);
    color: white;
  }
`

// Пресет для кнопки "Close"
const closePreset = css`
  height: 30px;
  width: 30px;

  border-radius: 8px;

  padding: 4px 6px;
  margin: 3px;

  background-color: rgba(0, 0, 0, 0);
  color: #aaa;

  font-size: 28px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    color: rgb(164, 46, 22);
  }
`

// Пресет для кнопки "Reply"
const replyPreset = css`
  height: 20px;
  width: 50px;

  border-radius: 8px;

  padding: 4px 6px;
  margin: 3px;

  background-color: rgba(14, 41, 75, 0.8);
  color: white;

  font-weight: bold;

  font-size: 10px;

  cursor: pointer;

  &:hover {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px rgba(14, 41, 75, 0.8);
  }
`

// Пресет для кнопки "Save"
const savePreset = css`
  height: 20px;
  width: 50px;

  border-radius: 8px;

  padding: 4px 6px;
  margin: 3px;

  background-color: rgb(22, 138, 184);
  color: white;

  font-weight: bold;

  font-size: 10px;

  cursor: pointer;

  &:hover {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px rgb(22, 138, 184);
  }
`

// Пресет для кнопки "Login"
const loginPreset = css`
  height: 20px;
  width: 100px;

  border-radius: 8px;

  padding: 4px 6px;

  background-color: white;
  color: rgb(24, 154, 203);

  font-weight: bold;
  font-size: 80%;

  cursor: pointer;

  &:hover {
    box-shadow:
      0 0 0 2px rgb(24, 154, 203),
      0 0 0 4px white;
  }
`

// Пресет для кнопки "Logout"
const logoutPreset = css`
  height: 20px;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  padding: 4px 6px;

  border: 2px solid white;

  background-color: rgba(0, 0, 0, 0);
  color: white;

  font-weight: bold;
  font-size: 80%;

  cursor: pointer;

  &:hover {
    background-color: white;
    color: rgb(24, 154, 203);
  }
`

// Пресет для кнопки "Sing In"
const singInPreset = css`
  height: 30px;
  width: 100%;

  border-radius: 8px;

  padding: 4px 6px;

  background-color: rgb(27, 206, 80);
  color: white;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px rgb(27, 206, 80);
  }
`

// Пресет для кнопки "SingUp"
const singUpPreset = css`
  height: 30px;
  width: 100%;

  border-radius: 8px;

  padding: 4px 6px;

  background-color: rgb(50, 66, 84);
  color: white;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px rgb(50, 66, 84);
  }
`

const numberPage = css`
  height: 50%;
  width: 25px;

  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  background-color: rgba(0, 0, 0, 0);
  color: rgb(12, 30, 62);

  font-weight: bold;
  font-size: 70%;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const nextPrevPage = css`
  height: 50%;
  width: 100px;

  border-radius: 8px;

  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);
  color: rgb(12, 30, 62);

  font-weight: bold;
  font-size: 70%;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const select = css`
  width: 100px;
  min-width: 120px;

  border: 1px solid rgb(22, 138, 184);

  background-color: white;
  color: rgb(22, 138, 184);

  border-radius: 8px;

  font-size: 16px;

  cursor: pointer;

  padding: 4px 6px;

  font-weight: bold;

  font-size: 15px;

  &:hover {
    /* text-decoration: underline; */
    background-color: rgb(22, 138, 184);
    color: white;
  }
`

const apply = css`
  width: 100px;
  min-width: 120px;

  background-color: rgb(22, 138, 184);
  color: white;

  border-radius: 8px;

  font-size: 16px;

  cursor: pointer;

  padding: 4px 6px;

  font-weight: bold;

  font-size: 15px;

  &:hover {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px rgb(22, 138, 184);
  }
`

const ShowMore = css`
  height: 50%;
  width: 100%;
  min-width: 120px;

  /* border: 1px solid rgb(22, 138, 184); */

  background-color: white;
  color: rgb(22, 138, 184);

  border-radius: 8px;

  font-size: 16px;

  cursor: pointer;

  padding: 4px 6px;

  font-weight: bold;

  &:hover {
    /* text-decoration: underline; */
    background-color: rgb(22, 138, 184);
    color: white;
  }
`

const getPreset = (preset: string) => {
  switch (preset) {
    case 'edit':
      return editPreset

    case 'delete':
      return deletePreset

    case 'add':
      return addPreset

    case 'addHeader':
      return addPostInTitlePreset

    case 'header':
      return headerPreset

    case 'close':
      return closePreset

    case 'reply':
      return replyPreset

    case 'save':
      return savePreset

    case 'login':
      return loginPreset

    case 'logout':
      return logoutPreset

    case 'singIn':
      return singInPreset

    case 'singUp':
      return singUpPreset

    case 'numberPage':
      return numberPage

    case 'nextPrevPage':
      return nextPrevPage

    case 'select':
      return select

    case 'showMore':
      return ShowMore

    case 'apply':
      return apply

    default:
      return css``
  }
}

const Button = styled.button<{
  // $color: 'orange' | 'blue' | 'red' | 'purple'
  // $size: 'big' | 'average' | 'small'
  $preset: string
}>`
  ${({ $preset }) => getPreset($preset)};
`

const StyledButton = {
  Button,
}

export default StyledButton
