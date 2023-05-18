import React from 'react';
import useGenres from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";


function GenreList() {

    const {data, isLoading, error} = useGenres()
    const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

    if (error) return null
    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading fontSize='2xl' marginBottom='3' marginTop={10}>Genres</Heading>
            <List>
                {data?.results.map((genre) => <ListItem key={genre.id} paddingY={'5px'}>
                    <HStack>
                        <Image boxSize={'32px'} borderRadius={8} objectFit='cover'
                               src={getCroppedImageUrl(genre.image_background)}/>
                        <Button
                            onClick={() => setSelectedGenreId(genre.id)}
                            whiteSpace='normal'
                            textAlign='left'
                            fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                            key={genre.id}
                            fontSize='lg'
                            variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>

    );
}

export default GenreList;