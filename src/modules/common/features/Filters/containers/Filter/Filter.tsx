import React, { FC } from 'react'
import { useAppSelector } from '../../../../../../app/hooks'
import { selectedFilters } from '../../../../../store/reducers/FiltersState.slice'
import Select from '../../../../components/Select/Select'
import Checkbox from '../../../../../../components/inputs/Checkbox/Checkbox'

interface IProps {
  builderId: string
  filtersId: string
}

const Filter: FC<IProps> = ({ builderId, filtersId }) => {
  const filters = useAppSelector(selectedFilters)

  const typeOfFilter = filters[filtersId].filters[builderId].type

  switch (typeOfFilter) {
    case 'select':
      return <></>

    case 'checkbox':
      return <></>

    default:
      return <> </>
  }
}

export default Filter
