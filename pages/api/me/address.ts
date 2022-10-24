import methods from "micro-method-router";

export default methods({
  async patch(req, res) {
    res.status(200).json({ message: "Actualizaste la direccion Method Patch" });
  },
});
