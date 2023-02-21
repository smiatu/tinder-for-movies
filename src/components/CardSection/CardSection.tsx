import CardFooter from '../CardFooter/CardFooter'
import TinderCard from 'react-tinder-card'
import React, { useEffect, useState } from 'react'
import { swipeHandler } from '../../actions/actions'
import axios from 'axios'

interface useStateTypes {
  isLoading: boolean
  movies: moviesTypes[]
}

interface moviesTypes {
  id: string
  imageURL: string
  title: string
  summary: string
  rating: number
  reject?: object
  accept?: object
}

const CardSection: () => JSX.Element = () => {
  const [cards, setCards] = useState<useStateTypes>({
    isLoading: true,
    movies: []
  })

  useEffect(() => {
    fetchData().catch(
      (e) => {
        console.log(e)
      }
    )
  }, [])

  const fetchData: () => Promise<void> = async () => {
    const result = await axios(
      'http://localhost:3000/recommendations'
    )

    setCards({
      isLoading: false,
      movies: result.data
    })
  }

  return (
    <div>
      {
        cards.movies.length > 0 &&
        cards.movies.map(
          movie => (movie.reject === undefined && movie.accept === undefined) && (
            <TinderCard
              key={movie.id}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => {
                swipeHandler({ direction: dir, id: movie.id }).then(
                  () => {
                    fetchData().catch(e => {
                      console.log(e)
                    })
                  }
                ).catch(
                  (e) => {
                    console.log(e)
                  }
                )
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '80vh',
                  width: '100vw'
                }}
              >
                <h2>{movie.title}</h2>
                <CardFooter
                  id={movie.id}
                  onContentChange={fetchData}
                />
              </div>

            </TinderCard>
          )
        )
      }

    </div>
  )
}

export default CardSection
