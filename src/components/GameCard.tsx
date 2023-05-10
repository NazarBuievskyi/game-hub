import React from 'react';
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game
}

function GameCard({game}: Props) {
    const {background_image, name, id, parent_platforms, metacritic} = game


    return (
        <div>
            <Card borderRadius={10} overflow={'hidden'} width={'300px'}>
                <Image src={getCroppedImageUrl(background_image)}/>
                <CardBody>
                    <Heading fontSize={'2xl'}>{name}</Heading>
                    <HStack justifyContent={'space-between'}>
                        <PlatformIconList platforms={parent_platforms.map((p) => p.platform)}/>
                        <CriticScore score={metacritic}/>
                    </HStack>
                </CardBody>
            </Card>
        </div>
    );
}

export default GameCard;