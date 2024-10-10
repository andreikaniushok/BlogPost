import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  IFiltersConfig,
  IFiltersLocalData,
} from '../../common/features/Filters/interfaces/FiltersLocalData/FiltersLocalData'
import { TRootState } from '../../../app/store'
import { IPost } from '../../../interfaces/Post'
import { IComment } from '../../../interfaces/Comment'

interface IFiltersReduxState {
  filters: IFiltersLocalData
  filteredData: IPost[] | IComment[]
}

const initialState: IFiltersReduxState = {
  filters: {},
  filteredData: [],
}

const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    initialFilters: (state, action: PayloadAction<IFiltersConfig>) => {
      Object.keys(action.payload).forEach((filtersId) => {
        state.filters[filtersId] = {
          filters: {},
          applyValues: {},
          selectedValues: {},
        }

        action.payload[filtersId].filters.forEach((filter) => {
          let initialValue: string | boolean = ''

          if (filter.type === 'select') {
            initialValue = ''
          } else if (filter.type === 'checkbox') {
            initialValue = false
          }

          state.filters[filtersId].filters[filter.id] = filter
          state.filters[filtersId].selectedValues[filter.id] = initialValue
          state.filters[filtersId].applyValues[filter.id] = initialValue
        })
      })
    },

    selectedFilterValue: (
      state,
      {
        payload: { filtersId, filterId, newState },
      }: PayloadAction<{ filtersId: string; filterId: string; newState: boolean | string }>,
    ) => {
      if (state.filters[filtersId]) {
        state.filters[filtersId].selectedValues[filterId] = newState
      }
    },

    appliesFilterValue: (state, { payload: { filtersId } }: PayloadAction<{ filtersId: string }>) => {
      if (state.filters[filtersId]) {
        state.filters[filtersId].applyValues = { ...state.filters[filtersId].selectedValues }
      }
    },

    addFilters: (state, action: PayloadAction<IFiltersLocalData>) => {
      const filtersData = action.payload
      Object.keys(filtersData).forEach((filtersId) => {
        const { filters, applyValues, selectedValues } = filtersData[filtersId]
        state.filters[filtersId] = {
          filters,
          applyValues,
          selectedValues,
        }
      })
    },

    updateFilteredData: (state, action: PayloadAction<IPost[] | IComment[]>) => {
      return {
        ...state,
        filteredData: action.payload,
      }
    },
  },
})

export const selectedFilters = (state: TRootState) => state.filters.filters
export const selectedFiltersData = (state: TRootState) => state.filters.filteredData

export const { initialFilters, selectedFilterValue, appliesFilterValue, addFilters, updateFilteredData } =
  FiltersSlice.actions

const FiltersReducer = FiltersSlice.reducer

export default FiltersReducer
