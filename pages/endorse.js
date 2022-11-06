import { memo, useState, useCallback, FC } from 'react'
import { Flex, Spacer, Center, Divider } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import ProfileTab from '../components/ProfileTab'
import SkillsTab from '../components/SkillsTab'

const Endorse =  () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    return (
        <>
            { isLargerThan1280 ? 
                <Flex flexDirection="row" justifyContent="center">
                    <ProfileTab/>
                    <Center height='500px'>
                        <Divider orientation='vertical'/>
                    </Center>
                    <SkillsTab/>

                </Flex>
                : 
                <Flex flexDirection="column" justifyContent="center">
                                        <ProfileTab/>

                    <Center height='500px'>
                        <Divider orientation='vertical'/>
                    </Center>
                    <SkillsTab/>

                </Flex>
            }
            
        </>
    )
}

export default memo(Endorse);