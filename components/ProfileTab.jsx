import { Divider } from "@chakra-ui/react";
import { Grid, Box,Heading,Button,Text,GridItem } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const ProfileTab = ()=>{
    return (
        <>
            <Grid>
            <Box maxW='32rem'>
            <Avatar
                size='lg'
                name='Prosper Otemuyiwa'
                src='https://bit.ly/prosper-baba'
            />{' '}
            <Heading mb={4}>brucewahne.eth</Heading>
            <Text fontSize='xl'>
                Paystack helps businesses in Africa get paid by anyone, anywhere in the
                world
            </Text>
            <Button size='lg' colorScheme='green' mt='24px'>
                Create a free account
            </Button>
            </Box>
            
            </Grid>
            
        </>
    )
}

export default ProfileTab;