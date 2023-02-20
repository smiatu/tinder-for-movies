import CardFooter from "../CardFooter/CardFooter";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from 'react';
import { swipeHandler } from "../../actions/actions";
import axios from 'axios';

const CardSection = () => {
    const [cards, setCards] = useState({
        isLoading: true,
        movies: [],
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://localhost:3000/recommendations",
            );

            setCards({
                isLoading: false,
                movies: result.data,
                error: null
            });
        };

        fetchData();
    });

    return (
        <div>
            {
                cards.movies && cards.movies.map(movie => (movie.reject === undefined && movie.accept === undefined) && (
                    <TinderCard
                        key={movie.id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swipeHandler(dir, movie.id)}
                    >
                        <div
                            style={{
                                position: "absolute",
                                height: "80vh",
                                width: "100vw"
                            }}
                        >
                            <h2>{movie.title}</h2>
                            <CardFooter id={movie.id} />
                        </div>

                    </TinderCard>
                    )
                )
            }

        </div>
    )
};

export default CardSection