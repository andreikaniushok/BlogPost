import React, { FC } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Styled from './FiltersPage.styles'

const FiltersPage: FC = () => {
  return (
    <>
      <Styled.Wrapper>
        <Header homeHeader={true} />

        <Footer />
      </Styled.Wrapper>
    </>
  )
}

export default FiltersPage
