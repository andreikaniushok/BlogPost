import styled from 'styled-components'
import { device } from '../../../../App.styled'

const GridFilters = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  flex-direction: column;

  gap: 15px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(auto, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

const GridItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`

const ButtonApplyWrapper = styled.div`
  margin-top: 15px;

  width: 100%;

  display: flex;
  justify-content: center;
`

const StyledFilter = {
  Wrapper,
  GridFilters,
  GridItem,
  ButtonApplyWrapper,
}

export default StyledFilter
