import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialFilters, selectedFilters } from '../../../store/reducers/FiltersState.slice'
import { IApplyFiltersValues, IFiltersConfig } from './interfaces/FiltersLocalData/FiltersLocalData'
import FilterBuilder from './FilterBuilder/FilterBuilder'
import ButtonNormal from '../../../../components/buttons/ButtonNormal/ButtonNormal'
import useFilters from './useFilters/useFilters'
import { IPost } from '../../../../interfaces/Post'
import { useAppSelector } from '../../../../app/hooks'
import { AccountSelectors } from '../../../store/reducers/Account.slice'
import FilterDataBuilder from './FilterDataBuilder/FilterDataBuilder'
import Styled from './Filter.styles'

interface IProps {
  filtersLocalDataConfig: IFiltersConfig
  filterData: IPost[]
}

export const getFiltersId = (obj: IFiltersConfig) =>
  Object.keys(obj).find((key) => obj[key].filters !== undefined) || ''

const Filters: FC<IProps> = ({ filtersLocalDataConfig, filterData }) => {
  const dispatch = useDispatch()

  const [selectedOptions, setSelectedOptions] = useState<{ [filterId: string]: string }>({})
  const { selectFilter, applyFilter, initialFilteredData } = useFilters()

  const currentUser = useAppSelector(AccountSelectors.selectCurrentUser)
  const filters = useSelector(selectedFilters)

  const filtersId = getFiltersId(filtersLocalDataConfig)
  const filtersData = filters[filtersId]
  const applyFilters: IApplyFiltersValues = filtersData ? filtersData.applyValues : { filter: '' }
  const filteredData = FilterDataBuilder(filterData, applyFilters, currentUser)

  const handleSelectFilter = (filterId: string, value: string | boolean): void => {
    selectFilter({ filtersId, filterId, newState: value })
  }

  const handleApplyFilter = (filtersId: string) => {
    applyFilter({ filtersId })
  }

  useEffect(() => {
    dispatch(initialFilters(filtersLocalDataConfig))
  }, [filtersLocalDataConfig])

  useEffect(() => {
    initialFilteredData(filteredData)
  }, [applyFilters])

  console.log('Отвильтровано', filteredData)

  if (!filtersData) {
    return <></>
  }

  return (
    <Styled.Wrapper>
      <Styled.GridFilters>
        {filtersData.filters &&
          Object.keys(filtersData.filters).map((filterId) => {
            const filter = filtersData.filters[filterId]
            const filterValue = filtersData.selectedValues[filterId]

            return (
              <Styled.GridItem>
                <FilterBuilder
                  key={filterId}
                  filter={filter}
                  filterValue={filterValue}
                  handleSelectFilter={handleSelectFilter}
                  selectedOptionsValue={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </Styled.GridItem>
            )
          })}
      </Styled.GridFilters>

      <Styled.ButtonApplyWrapper>
        <ButtonNormal
          preset="apply"
          onClick={() => handleApplyFilter(filtersId)}
        >
          Apply filters
        </ButtonNormal>
      </Styled.ButtonApplyWrapper>
    </Styled.Wrapper>
  )
}

export default Filters
