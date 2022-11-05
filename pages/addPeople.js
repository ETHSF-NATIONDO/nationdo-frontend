import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UseAccount from "../sections/UseAccount";
import { useAccount, Web3Button } from "@web3modal/react";
import HumanCheck from "../sections/HumanCheck";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddPeople() {
  const [lensId, setLensId] = useState(null);
  const { account } = useAccount();

  const address = "0xcB7eA0eC36670AA13088C4372fe8636D4D2b574f";

  useEffect(() => {
    const getLensId = async () => {
      const id = await axios
        .get(`api/getLensAccount/${address}`)
        .then((response) => {
          return response.data.result;
        });
      setLensId(id);
      return id;
    };
    getLensId();
  }, [address]);

  useEffect(() => {
    const getLensFollowers = async (id) => {
      axios
        .get(`api/getLensFollowers/${id}`)
        .then((response) => console.log(response.data));
    };
    if (lensId) {
      getLensFollowers(lensId);
    }
  }, [lensId]);

  return (
    <div className={styles.container}>
      <Head>
        <title>NationDO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container height={32} backgroundColor="tomato" w="100%">
          <div>Hello world</div>
        </Container>
      </main>
    </div>
  );
}
