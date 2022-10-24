import methods from "micro-method-router";

export default methods({
  async post(req, res) {
    const { productId } = req.query;
    if (!Boolean(productId)) {
      res.json({
        message: "No se proceso la orden porque no envio un productId",
      });
    } else {
      res.json({ message: "Orden procesada correctamente" });
    }
  },
});
