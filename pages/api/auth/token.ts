import method from "micro-method-router";

// Recibe un email y un código y valida que sean los correctos. En el caso de que sean correctos devuelve un token e invalida el código.

export default method({
  async post(req, res) {
    res.status(200).json({ message: "auth/token funcionando tipo POST" });
  },
});
