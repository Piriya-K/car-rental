import { gql, request } from "graphql-request";

export const getCarList = async () => {
  const endpoint = `https://ca-central-1.cdn.hygraph.com/content/clyk669di04uk07ti8uc4zeb8/master`;

  const query = gql`
    query carLists {
      carLists {
        average
        brand
        id
        name
        price
        seat
        transmission
        image {
          url
        }
      }
    }
  `;

  const result = (await request(endpoint, query)) as { carLists?: any };

  return result;
};
