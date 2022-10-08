export default function getProduct(req, res) {
  console.log(req);
  res.status(200).json({
    resa: "hola",
    // En esta forma de hacer las cosas el req.query también toma los req params (que se llamarían asi en express)
    message: req.query,
  });
}
