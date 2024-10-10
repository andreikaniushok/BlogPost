import { useEffect } from 'react'
import { IFiltersLocalData } from '../interfaces/FiltersLocalData/FiltersLocalData'
import { useDispatch } from 'react-redux'
import {
  addFilters,
  appliesFilterValue,
  selectedFilters,
  selectedFilterValue,
  updateFilteredData,
} from '../../../../store/reducers/FiltersState.slice'
import { useAppSelector } from '../../../../../app/hooks'
import { IPost } from '../../../../../interfaces/Post'
import { IComment } from '../../../../../interfaces/Comment'

const STORAGE_KEY = 'filtersState'

interface IStoredFilters {
  filters: IFiltersLocalData
}

const getStoredFilters = (): IFiltersLocalData => {
  const storedData = localStorage.getItem(STORAGE_KEY)

  if (!storedData) return {}

  const { filters: storedFilters } = JSON.parse(storedData) as IStoredFilters

  return storedFilters
}

const saveFilters = (newFilters: IFiltersLocalData): void => {
  const storedData: IStoredFilters = { filters: { ...newFilters } }

  const formattedStoreData = JSON.stringify(storedData)

  localStorage.setItem(STORAGE_KEY, formattedStoreData)
}

const useFilters = () => {
  const dispatch = useDispatch()

  const filters = useAppSelector(selectedFilters)

  useEffect(() => {
    const storedFilters = getStoredFilters()

    if (Object.keys(storedFilters).length > 0) {
      dispatch(addFilters(storedFilters))
    }
  }, [])

  const selectFilter = (payload: { filtersId: string; filterId: string; newState: string | boolean }): void => {
    dispatch(selectedFilterValue(payload))
    saveFilters(filters)
  }

  const applyFilter = (payload: { filtersId: string }): void => {
    dispatch(appliesFilterValue(payload))
    saveFilters(filters)
  }

  const initialFilteredData = (filteredData: IPost[] | IComment[]): void => {
    dispatch(updateFilteredData(filteredData))
  }

  return { filters, selectFilter, applyFilter, initialFilteredData }
}

export default useFilters
