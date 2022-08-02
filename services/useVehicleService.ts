import { useQuery } from '@tanstack/react-query'

const URL = 'https://car-data.p.rapidapi.com/cars'

const headers = {
  'X-RapidAPI-Key': 'c7dec670b5mshc143ff13d1f92b9p1e04c2jsn80d55a0eb774',
  'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
}

type Model = {
  id: number
  make: string
  model: string
  type: string
  year: number
}

export const useListMakes = () => {
  const query = useQuery<Array<string>>(
    ['makes'],
    () => fetch(`${URL}/makes`, { headers })
      .then(response => response.json()),
  )

  return query
}

export const useListModels = (make?: string) => {
  const query = useQuery<Array<Model>>(
    ['models', make],
    () => make
      ? fetch(`${URL}?${new URLSearchParams({ make })}`, { headers })
          .then(response => response.json())
      : Promise.resolve([]),
  )

  return query
}
