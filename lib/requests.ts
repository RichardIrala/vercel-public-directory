import Airtable from "airtable";
import "dotenv/config";
//Pendiente, conectar airtable a este repo
export const airtableBase = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base("appZjYX0g5wHX7EeZ");
