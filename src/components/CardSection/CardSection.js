import CardFooter from "../CardFooter/CardFooter";
import TinderCard from "react-tinder-card";
import { useState } from 'react';

const CardSection = () => {
    const [cards, setCards] = useState([
        {
            name: 'card1',
        },
        {
            name: 'card2',
        },
        {
            name: 'card3',
        }
    ]);

    return (
        <div>
            {
                cards.map(card => (
                    <div style={{position: "absolute", height: "80vh", width: "100vw"}}>
                        <TinderCard
                            key={card.name}
                            preventSwipe={['up', 'down']}
                        >
                            <div>
                                <h2>{card.name}</h2>
                            </div>
                        </TinderCard>
                        <CardFooter />
                    </div>
                    )
                )
            }

        </div>
    )
};

export default CardSection