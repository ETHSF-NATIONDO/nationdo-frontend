import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UseAccount from "../sections/UseAccount";
import { useAccount, Web3Button } from "@web3modal/react";
import HumanCheck from "../sections/HumanCheck";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Divider, Center, VStack, StackDivider, Box } from "@chakra-ui/react";

export default function Home() {
  const { account } = useAccount();
  return (
    <div className={styles.container}>
      <Head>
        <title>NationDO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={5}
            align="flex"
          >
            <Box h="100px">
              <Web3Button />
            </Box>

            <Box h="100px">
              <HumanCheck />{" "}
              {account.isConnected ? (
                <CheckCircleIcon w={3} h={3} color="green.500" />
              ) : (
                <WarningIcon w={3} h={3} color="red.500" />
              )}
              {
                //account.isConnected && (
                // <>
                //</>  <UseAccount />
                //</></>
                //)
              }
            </Box>
          </VStack>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by NationDO
        </a>
      </footer>
    </div>
  );
}
