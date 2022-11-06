import { useState } from "react";
import { default as ReactSelect } from "react-select";
import { Heading, Button, Box } from "@chakra-ui/react";
import EndorseAbi from "./../abi/EndorseContract.abi.json";
import { ethers } from "ethers";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Puff } from "react-loader-spinner";

const SkillsTab = ({ profile }) => {
  const [address, setAddress] = useState("0x8776655554");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const handleChange = async (selected) => {
    setSkills(selected);
  };

  const skillsArray = ["python", "solidity"];

  const contractAddress = "0x6E3DdE42283f6B5C04Be18c7369e24007764870c";
  const sendJSONtoIPFS = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const from = await signer.getAddress();
      const resJSON = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
        data: {
          from: from,
          skills: skillsArray,
        },
        headers: {
          pinata_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_KEY}`,
          pinata_secret_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_SECRET}`,
        },
      });

      console.log("final ", `ipfs://${resJSON.data.IpfsHash}`);
      const tokenURI = `ipfs://${resJSON.data.IpfsHash}`;
      console.log("Token URI", tokenURI);
      mintSBT(tokenURI);
    } catch (error) {
      console.log("JSON to IPFS: ");
      console.log(error);
    }
  };

  const mintSBT = async (tokenURI) => {
    if (typeof window.ethereum !== "undefined") {
      setLoading(true);
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const endorseContract = new ethers.Contract(
        contractAddress,
        EndorseAbi,
        signer
      );
      const transaction = await endorseContract.endorse(
        [profile.ownedBy],
        [tokenURI]
      );
      await transaction.wait();
      setLoading(false);
      router.push("/success");
    }
  };

  const skillsSet = [
    { value: 1, label: "Javascript" },
    { value: 2, label: "Typescript" },
    { value: 3, label: "Solidity" },
    { value: 4, label: "CSS" },
    { value: 5, label: "Rust" },
    { value: 6, label: "Golang" },
    { value: 7, label: "NextJs" },
    { value: 8, label: "Python" },
    { value: 9, label: "SQL" },
  ];

  return (
    <Box w={"77%"} marginLeft={20}>
      <Heading as="h5" size="md" marginBottom={10}>
        What they are good at?
      </Heading>

      <ReactSelect
        placeholder="Select option"
        options={skillsSet}
        isMulti
        isSearchable={true}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      {loading ? (
        <Box marginTop={10}>
          <Puff
            height="80"
            width="80"
            radisu={1}
            color="#E7F3FF"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Box>
      ) : (
        <Button
          onClick={() => sendJSONtoIPFS()}
          marginTop={10}
          backgroundColor={"#E7F3FF"}
        >
          Send SBT
        </Button>
      )}
    </Box>
  );
};

export default SkillsTab;
