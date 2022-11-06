import { Button } from "@chakra-ui/react";
import { useQRCode } from "next-qrcode";
import { useDisclosure } from '@chakra-ui/react'
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

const qrProofRequestJson = {
    id: "c811849d-6bfb-4d85-936e-3d9759c7f105",
    //level: "Q",
    //width: 200,
    typ: "application/iden3comm-plain-json",
    type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
    body: {
        transaction_data: {
            contract_address: "0xcDBA8a30ACCc17Fd78EC32C91B515a093d904cf7",
            method_id: "b68967e2",
            chain_id: 80001,
            network: "polygon-mumbai"
        },
        reason: "DorseAuthentication",
        scope: [
            {
                id: 1,
                circuit_id: "credentialAtomicQuerySig",
                rules: {
                    query: {
                        allowed_issuers: ["*"],
                        req: {
                            isHuman: {
                                "$eq": 1
                            }
                        },
                        schema: {
                            url:
                                "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/bd9f7304-ac6b-4a9a-b913-7ee06c28e2ab.json-ld",
                            type: "Human Proof"
                        }
                    }
                }
            }
        ]
    }
};

const deployedContractAddress = "0x80328e5b09f63B35F4b7D2B1FEDCE477bC2A6e03"


export default function PolygonAuth() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { Canvas } = useQRCode();
    return (
        <div >
            <Button
                onClick={onOpen}
                colorScheme='pink'
                borderRadius="10"

                variant='outline'>
                Polygon Authentication</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Polygon ID</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Canvas
                            text={JSON.stringify(qrProofRequestJson)}
                        />

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )

}

