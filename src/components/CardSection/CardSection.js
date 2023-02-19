import CardFooter from "../CardFooter/CardFooter";
import TinderCard from "react-tinder-card";
import {useEffect, useState} from 'react';
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
                "http://localhost:3000/movies",
            );

            setCards({
                isLoading: false,
                movies: result.data,
                error: null
            });
        };

        fetchData();
    }, []);

    return (
        <div>
            {
                cards.movies && cards.movies.map(movie => (
                    <TinderCard
                        key={movie.id}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{
                                position: "absolute",
                                height: "80vh",
                                width: "100vw"
                            }}
                        >
                            <h2>{movie.title}</h2>
                            <CardFooter />
                        </div>

                    </TinderCard>
                    )
                )
            }

        </div>
    )
};

export default CardSection