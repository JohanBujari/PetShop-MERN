const PetController = require("../controller/controller");

module.exports = (app) => {
  app.get("/api/getAllPets", PetController.getAllPets);
  app.post("/api/addPet", PetController.addPet);
  app.get("/api/getPet/:id", PetController.getOnePet);
  app.put("/api/editPet/:id", PetController.editPet);
  app.delete("/api/delete/:id", PetController.deletePet);
};
