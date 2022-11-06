import { Button } from '@chakra-ui/react'
import {
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    VStack
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import WorldCoinAuth from './WorldCoinAuth'
import LensAuth from './LensAuth'
import PolygonAuth from './PolygonAuth'




export default function HumanCheck() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                size='md'
                height='80px'
                width='250px'
                border='2px'
                borderColor='green.500'
                borderRadius={40}
                onClick={onOpen} colorScheme='teal' variant='outline'>Human Check</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center>
                            <VStack>
                                <WorldCoinAuth />
                                <PolygonAuth width={{ base: '100%', sm: 'auto' }} />
                            </VStack>
                        </Center>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}