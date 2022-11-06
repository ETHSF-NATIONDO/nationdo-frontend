import { memo, useState, useCallback, FC, useEffect } from "react";
import { Flex, Spacer, Center, Divider, Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import ProfileTab from "../../components/ProfileTab";
import SkillsTab from "../../components/SkillsTab";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";

const Loading = () => {
  return <></>;
};

const Endorse = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const result = await axios
        .get(`/api/getLensProfile/${id}`)
        .then((response) => {
          return response.data.result.profile;
        });
      setProfile(result);
      console.log(result);
    };
    getProfile();
  }, [id]);

  return (
    <>
      {profile ? (
        <>
          {isLargerThan1280 ? (
            <Flex flexDirection="row" w={"80%"} marginTop={10}>
              <ProfileTab profile={profile} />
              <SkillsTab profile={profile} />
            </Flex>
          ) : (
            <Flex flexDirection="column" justifyContent="center">
              <ProfileTab profile={profile} />

              <Center height="500px">
                <Divider orientation="vertical" />
              </Center>
              <SkillsTab />
            </Flex>
          )}{" "}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default memo(Endorse);
