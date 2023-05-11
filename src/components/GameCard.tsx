import React from 'react';
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
    game: Game
}

function GameCard({game}: Props) {
    const {background_image, name, parent_platforms, metacritic} = game


    return (
        <GameCardContainer>
            <Card>
                <Image src={getCroppedImageUrl(background_image)}/>
                <CardBody>
                    <Heading fontSize={'2xl'}>{name}</Heading>
                    <HStack justifyContent={'space-between'}>
                        <PlatformIconList platforms={parent_platforms.map((p) => p.platform)}/>
                        <CriticScore score={metacritic}/>
                    </HStack>
                </CardBody>
            </Card>
        </GameCardContainer>
    );
}

export default GameCard;