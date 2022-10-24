import methods from "micro-method-router";
import { airtableBase } from "lib/requests";
import { productIndex } from "lib/algolia";

// Crear una función que reciba offSet y limit para transformarlos automaticamente en numeros y quitarle la tarea al endpoint
export default methods({
  async post(req, res) {
    airtableBase("Furniture")
      .select({
        // Selecting the first 3 records in All furniture:
        pageSize: 10,
      })
      .eachPage(
        async function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.

          const objects = records.map(function (record) {
            console.log(record.get("Name"));
            return {
              objectID: record.id,
              ...record.fields,
            };
          });
          await productIndex.saveObjects(objects);
          console.log("Next page");

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("FINALIZO");
          res.send("Termino");
        }
      );
  },
});
