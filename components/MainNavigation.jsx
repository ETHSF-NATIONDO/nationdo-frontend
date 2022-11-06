import {
    Box,
    Flex,
    Text,
    HStack,
    Img,
    Button,
    Menu,
    MenuButton,
    useColorModeValue,
    Avatar,
    Input
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { truncateAddress } from "../utils/web3";
import { useAccount } from "@web3modal/react";

export default function MainNavigation() {
    const { account } = useAccount();

    return (
        <Box
            bg="white"
            px={4}
            sx={{
                position: "-webkit-sticky",
                /* Safari */ position: "sticky",
                top: "0",
                zIndex: "1",
            }}
            opacity={0.95}
        >
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <HStack spacing={8} alignItems={"center"}>
                    <NextLink href="/">
                        <Img
                            boxSize="100px"
                            objectFit="contain"
                            src="/assets/logo1.png"
                            alt="nationDO"
                        />
                    </NextLink>
                    <Input bg="white" placeholder='Basic usage' />
                </HStack>

                <Flex alignItems={"center"}>
                    {account.isConnected ? (
                        <CheckCircleIcon w={3} h={3} color="green.500" />
                    ) : (
                        <WarningIcon w={3} h={3} color="red.500" />
                    )}

                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                        >
                            <Text>{truncateAddress(account.address)}</Text>
                            
                        </MenuButton>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    );
}
