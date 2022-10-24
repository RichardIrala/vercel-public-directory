import methods from "micro-method-router";
import { NextApiRequest, NextApiResponse } from "next";

// Recibe un email y encuentra/crea un user con ese email y le envía un código vía email.

// export default function auth(req, res) {
//   const { email } = req;
//   res.status(200).send("Ruta auth neutral");
// }

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: "Auth post funcionando" });
  },
});
