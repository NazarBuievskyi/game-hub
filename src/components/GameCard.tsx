import React from 'react';
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, Image} from "@chakra-ui/react";

interface Props {
    game: Game
}

function GameCard({game}: Props) {
    const {background_image, name, id} = game

    return (
        <div>
            <Card borderRadius={10} overflow={'hidden'}>
                <Image objectFit='cover' src={background_image}/>
                <CardBody>
                    <Heading fontSize={'2xl'}>{name}</Heading>
                </CardBody>
            </Card>
        </div>
    );
}

export default GameCard;