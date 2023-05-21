import React, {useState} from 'react';
import {Button, Text} from "@chakra-ui/react";


interface Props {
    children: string
}

function ExpandableText({children}: Props) {
    const [expanded, setExpanded] = useState(false)
    const limit = 300

    if (!children) return null

    if (children.length <= limit) return <Text>{children}</Text>

    const summery = expanded ? children : children.substring(0, 300) + '... '

    return (
        <Text>{summery}
            <Button size={'xs'}
                    fontWeight={'bold'}
                    colorScheme={'yellow'}
                    onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read more'}
            </Button>
        </Text>
    )
}
export default ExpandableText;