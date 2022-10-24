import algoliasearch from "algoliasearch";

//Chequear si la conexión funciona bien
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const productIndex = client.initIndex(process.env.ALGOLIA_INDEX);

export { productIndex };
