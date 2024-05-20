const { readData, writeData } = require("../utils/data");

const sendAllGames = async (req, res) => {
     res.send(req.games);
  };
  
  const sendUpdaredGame = async (req, res) => { 
         res.send({
         games: req.games,
         updated: req.game
       });
};

  module.exports = { sendAllGames, sendUpdaredGame };