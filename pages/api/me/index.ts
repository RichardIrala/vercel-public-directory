import methods from "micro-method-router";

export default methods({
  async get(req, res) {
    res.status(200).json({ message: "Eres Richard Irala Method GET" });
  },
  async patch(req, res) {
    res
      .status(200)
      .json({ message: "Actualizaste la cuenta Richard Method Patch" });
  },
});
