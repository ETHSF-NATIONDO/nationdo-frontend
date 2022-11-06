import { apolloClient } from "../helpers/apollo";
import { gql } from "@apollo/client";

export default async function getLensFollowers(req, res) {
  const { id } = req.query;

  const query = `
  query Profile {
    profile(request: { profileId: "${id}" }) {
      id
      name
      bio
      attributes {
        displayType
        traitType
        key
        value
      }
      followNftAddress
      metadata
      isDefault
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      handle
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
      ownedBy
      dispatcher {
        address
        canUseRelay
      }
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
      followModule {
        ... on FeeFollowModuleSettings {
          type
          amount {
            asset {
              symbol
              name
              decimals
              address
            }
            value
          }
          recipient
        }
        ... on ProfileFollowModuleSettings {
          type
        }
        ... on RevertFollowModuleSettings {
          type
        }
      }
    }
  }
`;

  const queryExample = async () => {
    const response = await apolloClient.query({
      query: gql(query),
    });
    console.log("Lens example data: ", response);
    return response.data;
  };

  const result = await queryExample();

  //   if (error) {
  //     res.status(400).json({ error: error.message });
  //   }

  res.status(200).json({ result });
}
