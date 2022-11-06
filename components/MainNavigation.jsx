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
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { truncateAddress } from "../utils/web3";
import { useAccount } from "@web3modal/react";
import Image from "next/image";

export default function MainNavigation() {
  const { account } = useAccount();

  return (
    <Box
      bg={"#f2f9ff"}
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
          <Box marginLeft={10}>
            <NextLink href="/">
              <Image
                width="100"
                height="64"
                objectFit="contain"
                src="/logo.png"
                alt="nationDO"
              />
            </NextLink>
          </Box>
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
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
