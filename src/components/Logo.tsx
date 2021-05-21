import React from 'react';
import { Box, Text } from 'bumbag';

function Logo(props: any) {
    return (
        <Box {...props}>
            <img src="/logo512.png" height="20px" width="20px" style={{ verticalAlign: "middle" }}/>
            <span> </span>
            <Text fontSize="lg" fontWeight="bold">
                Exeria Connect
            </Text>
        </Box>
    );
}

export default Logo;
