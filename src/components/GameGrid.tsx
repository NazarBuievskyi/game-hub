import React from 'react';
import {Box, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {GameQuery} from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    gameQuery: GameQuery
}

function GameGrid({gameQuery}: Props) {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

    if (error) return <Text>{error.message}</Text>

    const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0

    return (
        <Box padding={'10px'}>
            <InfiniteScroll
                dataLength={fetchedGamesCount}
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<Spinner/>}
            >
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                            spacing={6}

                >
                    {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton}><GameCardSkeleton
                        key={skeleton}/></GameCardContainer>)}
                    {data?.pages.map((page, index) =>
                        <React.Fragment key={index}>
                            {page.results.map(game => <GameCard key={game.id} game={game}/>)}
                        </React.Fragment>
                    )}
                </SimpleGrid>
                {/*{hasNextPage && (*/}
                {/*    <Button*/}
                {/*        onClick={() => fetchNextPage()}*/}
                {/*        disabled={isFetchingNextPage}*/}
                {/*        marginY={5}*/}
                {/*    >*/}
                {/*        {isFetchingNextPage ? 'Loading...' : 'Load more'}*/}
                {/*    </Button>*/}
                {/*)}*/}
            </InfiniteScroll>

        </Box>
    );
}

export default GameGrid;