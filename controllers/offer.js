const fs = require("fs");
const Offer = require("../models/offer");

exports.createOffer = (req, res, next) => {
  const offerObject = JSON.parse(req.body.offer);
  delete offerObject._id;
  const offer = new Offer({
    ...offerObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  offer
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneOffer = (req, res, next) => {
  Offer.findOne({
    _id: req.params.id,
  })
    .then((offer) => {
      res.status(200).json(offer);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifyOffer = (req, res, next) => {
  const offerObject = req.file
    ? {
        ...JSON.parse(req.body.offer),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Offer.updateOne(
    { _id: req.params.id },
    { ...offerObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteOffer = (req, res, next) => {
  Offer.findOne({ _id: req.params.id })
    .then((offer) => {
      const filename = offer.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Offer.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getAlloffer = (req, res, next) => {
  Offer.find()
    .then((offers) => {
      res.status(200).json(offers);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
