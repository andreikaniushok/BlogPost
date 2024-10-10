import { useDispatch } from 'react-redux'
import { IPost } from '../../../../../interfaces/Post'
import { IUser } from '../../../../../interfaces/User'
import { IApplyFiltersValues } from '../interfaces/FiltersLocalData/FiltersLocalData'

const sortDataByNew = (data: IPost[]) => {
  return [...data].sort((a, b) => {
    const dateA = new Date(
      a.date?.year || 0,
      a.date?.month || 0,
      a.date?.dayOfMonth || 0,
      a.time?.hours || 0,
      a.time?.minutes || 0,
    ).getTime()
    const dateB = new Date(
      b.date?.year || 0,
      b.date?.month || 0,
      b.date?.dayOfMonth || 0,
      b.time?.hours || 0,
      b.time?.minutes || 0,
    ).getTime()
    return dateA - dateB
  })
}

const sortDataByOld = (data: IPost[]) => {
  return [...data].sort((a, b) => {
    const dateA = new Date(
      a.date?.year || 0,
      a.date?.month || 0,
      a.date?.dayOfMonth || 0,
      a.time?.hours || 0,
      a.time?.minutes || 0,
    ).getTime()
    const dateB = new Date(
      b.date?.year || 0,
      b.date?.month || 0,
      b.date?.dayOfMonth || 0,
      b.time?.hours || 0,
      b.time?.minutes || 0,
    ).getTime()
    return dateB - dateA
  })
}

const sortBySearch = (data: IPost[], searchValue: string) => {
  return [...data].filter((item) => item.title.includes(searchValue))
}

const sortDataByAtoZ = (data: IPost[]) => {
  return [...data].sort((a, b) => a.title.localeCompare(b.title))
}

const sortDataByZtoA = (data: IPost[]) => {
  return [...data].sort((a, b) => b.title.localeCompare(a.title))
}

const sortDataByIsHidden = (data: IPost[]) => {
  return [...data].filter((item) => item.isShow)
}

const sortDataByUserId = (data: IPost[], currentUser: IUser) => {
  return [...data].filter((item) => item.owner?.email === currentUser.email)
}

const filteredByNewId = (filterValue: string | boolean, filteredArray: IPost[]) => {
  switch (filterValue) {
    case 'sortByNew':
      filteredArray = sortDataByNew(filteredArray)
      break
    case 'sortByOld':
      filteredArray = sortDataByOld(filteredArray)
      break
  }

  return filteredArray
}

const filteredByAlphabetId = (filterValue: string | boolean, filteredArray: IPost[]) => {
  switch (filterValue) {
    case 'sortByAtoZ':
      filteredArray = sortDataByAtoZ(filteredArray)
      break
    case 'sortByZtoA':
      filteredArray = sortDataByZtoA(filteredArray)
      break
  }

  return filteredArray
}

const filteredByHiddenId = (filterValue: string | boolean, filteredArray: IPost[]) => {
  switch (filterValue) {
    case true:
      filteredArray = sortDataByIsHidden(filteredArray)
      break
  }

  return filteredArray
}

const filteredByOnlyUserPostId = (filterValue: string | boolean, filteredArray: IPost[], currentUser: IUser) => {
  switch (filterValue) {
    case true:
      filteredArray = sortDataByUserId(filteredArray, currentUser)
      break
  }

  return filteredArray
}

const FilterDataBuilder = (data: IPost[], filterParams: IApplyFiltersValues, currentUser?: IUser | null): IPost[] => {
  let filteredArray = [...data]

  Object.entries(filterParams).forEach(([filterId, filterValue]) => {
    switch (filterId) {
      case 'byNewId':
        filteredArray = filteredByNewId(filterValue, filteredArray)
        break

      case 'byAlphabetId':
        filteredArray = filteredByAlphabetId(filterValue, filteredArray)
        break

      case 'hiddenId':
        filteredArray = filteredByHiddenId(filterValue, filteredArray)
        break

      case 'onlyUserPostId':
        if (currentUser) {
          filteredArray = filteredByOnlyUserPostId(filterValue, filteredArray, currentUser)
          break
        }
        break

      case 'searchId': {
        filteredArray = sortBySearch(filteredArray, filterValue as string)
        break
      }
    }
  })

  console.log('Filtered array after applying filters:', filteredArray)

  return filteredArray
}

export default FilterDataBuilder
