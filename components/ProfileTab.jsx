import { Divider } from "@chakra-ui/react";
import { Grid, Box, Heading, Button, Text, GridItem } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

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
      <Grid w={"33%"} marginLeft={20}>
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
          <Text fontSize="sm">{shortenAddress(profile.ownedBy)}</Text>
        </Box>
      </Grid>
    </>
  );
};

export default ProfileTab;
