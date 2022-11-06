import { Select, Grid } from '@chakra-ui/react'
import { Heading, Button } from '@chakra-ui/react'
import {useState} from "react"
import EndorseAbi from './../abi/EndorseContract.abi.json'
import { ethers } from "ethers";
import axios from 'axios';

const SkillsTab = () => {
    const [address, setAddress] = useState("0x8776655554")

    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    
    const skillsArray = ["python", "solidity"];
    const tokenURIs = ["one", "two"]
    const recipients = ["", ""]    

    const contractAddress = "0x6E3DdE42283f6B5C04Be18c7369e24007764870c"
    const sendJSONtoIPFS = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const from = await signer.getAddress()
            const resJSON = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
                data: {
                    "from": from,
                    "skills": skillsArray
                },
                headers: {
                    'pinata_api_key': `${process.env.NEXT_PUBLIC_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${process.env.NEXT_PUBLIC_PINATA_API_SECRET}`,
                },
            });

            console.log("final ", `ipfs://${resJSON.data.IpfsHash}`)
            const tokenURI = `ipfs://${resJSON.data.IpfsHash}`;
            console.log("Token URI", tokenURI);
            mintSBT(tokenURI);

        } catch (error) {
            console.log("JSON to IPFS: ")
            console.log(error);
        }
    }

    const mintSBT = async (tokenURI) => {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const endorseContract = new ethers.Contract(contractAddress, EndorseAbi, signer);
            const transaction = await endorseContract.endorse([],[tokenURI])
            await transaction.wait()
        }
    }

    
    return (
        <Grid>
            <Heading as='h5' size='md'>
            What they are good at?
            </Heading>
            <Select placeholder='Select option'>
                <option value='option1'>Javascript</option>
                <option value='option2'>Typescript</option>
                <option value='option3'>Solidity</option>
                <option value='option4'>CSS</option>
                <option value='option5'>Rust</option>
                <option value='option6'>Golang</option>
                <option value='option7'>NextJs</option>
                <option value='option8'>Python</option>
                <option value='option9'>SQL</option>
            </Select>
            <Button onClick={sendJSONtoIPFS}>
                SEND
            </Button>
            
        </Grid>

    )
}

export default SkillsTab;