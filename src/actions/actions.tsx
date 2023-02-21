import axios from 'axios'

export interface Props {
  direction: string
  id: string
}

export const swipeHandler: (arg0: Props) => Promise<void> = async ({ direction, id }: Props) => {
  if (direction === 'right') {
    await acceptMovie(id)
    return
  }
  await rejectMovie(id)
}

export const acceptMovie: (arg0: string) => Promise<void> = async (id: string) => {
  const result = await axios(
    `http://localhost:3000/recommendations/${id}`
  )
  axios.put(`http://localhost:3000/recommendations/${id}`, {
    ...result.data,
    accept: {
      value: true
    }
  }).then(resp => {
    console.log(resp.data)
  }).catch(error => {
    console.log(error)
  })
}

export const rejectMovie: (arg0: string) => Promise<void> = async (id: string) => {
  const result = await axios(
    `http://localhost:3000/recommendations/${id}`
  )
  axios.put(`http://localhost:3000/recommendations/${id}`, {
    ...result.data,
    reject: {
      value: true
    }
  }).then(resp => {
    console.log(resp.data)
  }).catch(error => {
    console.log(error)
  })
}
