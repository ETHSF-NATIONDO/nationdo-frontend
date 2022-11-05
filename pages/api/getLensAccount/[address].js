import { apolloClient } from "../helpers/apollo";
import { gql } from "@apollo/client";

export default async function getLensAccount(req, res) {
  const { address } = req.query;

  const query = `
query Profiles {
    profiles(request: { ownedBy: ["${address}"], limit: 1 }) {
      items {
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
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }
`;

  try {
    const queryExample = async () => {
      const response = await apolloClient.query({
        query: gql(query),
      });
      const id = response.data.profiles.items[0].id;
      return id;
    };

    const result = await queryExample();
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  //   if (error) {
  //     res.status(400).json({ error: error.message });
  //   }
}
