import CardFooter from '../CardFooter/CardFooter'
import TinderCard from 'react-tinder-card'
import React, { useEffect, useState } from 'react'
import { swipeHandler } from '../../actions/actions'
import axios from 'axios'
import './CardSection.css'

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
              className={'card__wrapper'}
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
              <div className={'card'}>
                <h2>{movie.title} ({movie.rating})</h2>
                <div className={'card__picture-wrapper'}>
                  <img src={movie.imageURL} className={'card__picture'}/>
                </div>
                <p>{movie.summary}</p>
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
