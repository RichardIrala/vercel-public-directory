import methods from "micro-method-router";

export default methods({
  async post(req, res) {
    res.json({ message: "Señal procesada, gracias por su compra" });
  },
});
