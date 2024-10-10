import { FC, PropsWithChildren } from 'react'
import Styled from './ButtonNormal.styles'

interface IProps {
  preset?:
    | 'edit'
    | 'delete'
    | 'add'
    | 'addHeader'
    | 'reply'
    | 'save'
    | 'close'
    | 'login'
    | 'logout'
    | 'singIn'
    | 'singUp'
    | 'nextPrevPage'
    | 'numberPage'
    | 'select'
    | 'header'
    | 'showMore'
    | 'apply'
  // color?: 'orange' | 'blue' | 'red' | 'purple'
  // size?: 'big' | 'average' | 'small'
  onClick?: () => void
  disabled?: any
}

const ButtonNormal: FC<PropsWithChildren<IProps>> = ({
  // color, size,
  children,
  preset,
  onClick,
  disabled,
}) => {
  return (
    <Styled.Button
      type={'submit'}
      onClick={onClick}
      disabled={disabled}
      // $color={color ?? 'orange'}
      // $size={size ?? 'big'}
      $preset={preset ?? ''}
    >
      {children}
    </Styled.Button>
  )
}

export default ButtonNormal
