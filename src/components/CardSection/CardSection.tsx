import CardFooter from "../CardFooter/CardFooter";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from 'react';
import { swipeHandler } from "../../actions/actions";
import axios from 'axios';
import React from "react";

type useStateTypes = {
    isLoading: boolean,
    movies: moviesTypes[]
}

type moviesTypes = {
    id: string,
    imageURL: string,
    title: string,
    summary: string,
    rating: number,
    reject?: object,
    accept?: object,
}

const CardSection = () => {
    const [cards, setCards] = useState<useStateTypes>({
        isLoading: true,
        movies: []
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const result = await axios(
            "http://localhost:3000/recommendations",
        );

        setCards({
            isLoading: false,
            movies: result.data
        });
    };

    return (
        <div>
            {
                cards.movies && cards.movies.map(movie => (movie.reject === undefined && movie.accept === undefined) && (
                    <TinderCard
                        key={movie.id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => {
                            swipeHandler({direction: dir, id: movie.id});
                            fetchData();
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                height: "80vh",
                                width: "100vw"
                            }}
                        >
                            <h2>{movie.title}</h2>
                            <CardFooter id={movie.id} onContentChange={fetchData}/>
                        </div>

                    </TinderCard>
                    )
                )
            }

        </div>
    )
};

export default CardSection;