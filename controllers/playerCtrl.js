const Player = require("../models/Player");

const playerCtrl = {
  post: async (req, res) => {
    try {
      const newPlayer = new Player(req.body);

      const result = await newPlayer.save();
      res.send({ player: result });
    } catch (error) {
      res.send({ err: error });
    }
  },
  get: async (req, res) => {
    try {
      const result = await Player.find();
      res.send({ response: result, message: "getting players " });
    } catch (error) {
      res.status(400).send({ message: "can not get players" });
    }
  },
  getOne: async (req, res) => {
    try {
      const result = await Player.findOne({ _id: req.params.id });
      if (!result) {
        return res
          .status(400)
          .send({ message: "there is no player with this id" });
      }
      res.send({ response: result, message: "getting player " });
    } catch (error) {
      res.status(400).send({ message: "there is no player with this id" });
    }
  },
  put: async (req, res) => {
    try {
      const result = await Player.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      result.modifiedCount = 1
        ? res.send({ message: "Player updated" })
        : res.send({ message: "there is no player with this id " });
      res.send({ response: result, message: "getting player " });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = playerCtrl;
