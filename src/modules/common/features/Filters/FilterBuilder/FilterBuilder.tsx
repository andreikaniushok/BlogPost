import React from 'react'
import Checkbox from '../../../../../components/inputs/Checkbox/Checkbox'
import Select, { ISelectOption } from '../../../components/Select/Select'
import { IFilter } from '../interfaces/FiltersLocalData/FiltersLocalData'
import NormalInput from '../../../../../components/inputs/NormalInput/NormalInput'
import Styled from './FilterBuilder.styles'

interface IProps {
  filter: IFilter
  filterValue: string | boolean
  optionList?: ISelectOption[]
  handleSelectFilter: (filterId: string, value: string | boolean) => void
  selectedOptionsValue: { [key: string]: string }
  setSelectedOptions: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
}

const FilterBuilder: React.FC<IProps> = ({
  filter,
  filterValue,
  handleSelectFilter,
  selectedOptionsValue,
  setSelectedOptions,
}) => {
  const optionList = filter.optionList
    ? filter.optionList
    : [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]

  const option = optionList?.find((option) => option.value === selectedOptionsValue[filter.id])

  const selectedOption = {
    label: option ? option.label : 'Select an option',
    value: option ? option.value : '',
  }

  switch (filter.type) {
    case 'select':
      return (
        <Select
          key={filter.id}
          optionList={optionList}
          selectedOption={{
            label: selectedOption.label || 'Select an option',
            value: selectedOptionsValue[filter.id] || '',
          }}
          onSelect={(option) => {
            setSelectedOptions((prevSelectedOptions) => ({
              ...prevSelectedOptions,
              [filter.id]: option.value.toString(),
            }))
            handleSelectFilter(filter.id, option.value.toString())
          }}
        />
      )

    case 'checkbox':
      return (
        <Checkbox
          key={filter.id}
          label={filter.name}
          checked={filterValue as boolean}
          onChange={(e) => handleSelectFilter(filter.id, e.target.checked)}
        />
      )

    case 'search':
      return (
        <NormalInput
          key={filter.id}
          // label={filter.name}
          type={'search'}
          placeholder={'Search...'}
          onChange={(searchValue) => handleSelectFilter(filter.id, searchValue)}
        ></NormalInput>
      )

    default:
      return null
  }
}

export default FilterBuilder
