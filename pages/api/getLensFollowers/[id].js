import { apolloClient } from "../helpers/apollo";
import { gql } from "@apollo/client";

export default async function getLensFollowers(req, res) {
  const { id } = req.query;

  const query = `
  query Followers {
    followers(request: { 
                  profileId: "${id}",
                limit: 10
               }) {
         items {
        wallet {
          address
          defaultProfile {
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
            handle
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
            }
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
                contractAddress
                amount {
                  asset {
                    name
                    symbol
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
        totalAmountOfTimesFollowed
      }
      pageInfo {
        prev
        next
        totalCount
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
