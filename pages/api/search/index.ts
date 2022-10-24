// base sería lo exportado por Airtable
import { airtableBase as base } from "lib/requests";
import methods from "micro-method-router";
import { productIndex } from "lib/algolia";

export default methods({
  // Esto es el "paginado" enviado a la práctica.
  async get(req, res) {
    const { limit, offset, q, page } = req.query;

    const limitNumber = Number(limit) || 10;
    const offsetNumber = Number(offset) || 0;
    const pageNumber = Number(page) || 0;

    const realLimit = offsetNumber + limitNumber;

    console.log(pageNumber);
    const { hits } = await productIndex.search(q, {
      hitsPerPage: limitNumber,
      page: pageNumber,
    });

    console.log(hits.length);
    // En Algolia tenemos hitsPerPage (resultados por pagina) y offSet (desde) / parseInt para volver un entero
    res.send({
      pagination: { limitNumber, offsetNumber, realLimit, page },
      results: hits,
    });
  },
  // Recambiar a get
  // async post(req, res) {
  //   const { q, offset, limit } = req.query;
  //   res.status(200).json({
  //     message: "Toma tu busqueda Method GET",
  //     datos: [q, offset, limit],
  //   });
  // },
  // async get(req, res) {
  //   base("Furniture")
  //     .select({
  //       // Selecting the first 3 records in All furniture:
  //       maxRecords: 6,
  //       view: "All furniture",
  //     })
  //     .eachPage(
  //       function page(records, fetchNextPage) {
  //         // This function (`page`) will get called for each page of records.

  //         records.forEach(function (record) {
  //           console.log("Retrieved", record.get("Name"));
  //         });
  //         const fields = records.map((record) => record.fields);
  //         // Esto da todo, pero records.fields seria la data que nos interesa. Aunque hay que mapear los records para obtener cada field de cada Furniture/mueble
  //         res.status(200).send({ results: fields });
  //         // To fetch the next page of records, call `fetchNextPage`.
  //         // If there are more records, `page` will get called again.
  //         // If there are no more records, `done` will get called.
  //         fetchNextPage();
  //       },
  //       function done(err) {
  //         if (err) {
  //           res.send(err);
  //           return;
  //         }
  //       }
  //     );
  // },
});
