import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import {Platform} from "../entities/platform";


function PlatformSelector() {
    const {data, error} = usePlatforms()
    const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
    const selectedPlatform = usePlatform(selectedPlatformId)
    const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)


    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map((platform: Platform) =>
                    <MenuItem
                        onClick={() => setSelectedPlatformId(platform.id)}
                        key={platform.id}>{platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;