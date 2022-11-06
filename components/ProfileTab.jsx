import { Heading, Text, Box } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

const shortenAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

const ProfileTab = ({ profile }) => {
  console.log(profile);
  return (
    <>
      <Box w={"33%"} marginLeft={20}>
        <Box maxW="32rem">
          <Avatar
            size="lg"
            name="Prosper Otemuyiwa"
            src={
              profile.picture?.original?.url &&
              "https://ipfs.io/ipfs/" + profile.picture.original.url.slice(7)
            }
          />{" "}
          <Heading mb={4}>{profile && profile.handle}</Heading>
          <Text fontSize="sm" marginBottom={20}>
            {shortenAddress(profile.ownedBy)}
          </Text>
          <Text fontSize="md" as="b">
            DAOs:
          </Text>
          <Text fontSize="md" marginBottom={20}>
            [Buidler DAO], [See DAO], [BujiDAO]
          </Text>
          <Text fontSize="md" as="b">
            Mostly used DApp:
          </Text>
          <Text fontSize="md">#OpenSea, #Gem, #SnapShot</Text>
        </Box>
      </Box>
    </>
  );
};

export default ProfileTab;
