const Pet = require("../model/model");

module.exports.getAllPets = (req, res) => {
  Pet.find()
    .sort({ petType: 1 })
    .exec()
    .then((allPets) =>
      res.status(200).json({ messageGetAll: "All pets retrieved", allPets })
    )
    .catch((err) =>
      res.status(400).json({ messageNotRetrieved: "Pets not retrieved", err })
    );
};

module.exports.addPet = (req, res) => {
  Pet.create(req.body)
    .then((newPet) =>
      res.status(200).json({ messageAddPet: "Succesfully added", newPet })
    )
    .catch((err) =>
      res.status(400).json({ messageNotCreated: "Pet not created!", err })
    );
};

module.exports.getOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((onePet) =>
      res.status(200).json({ messageGetOnePet: "Got one pet", onePet })
    )
    .catch((err) =>
      res.status(400).json({ messageMissingPet: "Missing Pet", err })
    );
};
module.exports.editPet = (req, res) => {
  Pet.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then((newPetEdit) =>
      res
        .status(200)
        .json({ messageNewPetEdit: "Edited succesffully", newPetEdit })
    )
    .catch((err) => res.json({ messageNotEdited: "Couldn't edit pet", err }));
};

module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((deletedOne) =>
      res
        .status(200)
        .json({ messageDeleteOnePet: "Deleted succesfully", deletedOne })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ messageNotDeleted: "Couldn't delete the pet", err })
    );
};
