const gamesRouter = require("express").Router();
const { sendAllGames, sendUpdaredGame } = require("../controllers/games"); 
const { getAllGames, checkIsTitleInArray, uptadeGamesArray, updateGamesFile, findGameByld, deleteGame } = require("../middlewares/games");
     
     gamesRouter.get("/games", getAllGames, sendAllGames)
     gamesRouter.delete("/games/:id", getAllGames, findGameByld,deleteGame, updateGamesFile, sendUpdaredGame);
     gamesRouter.post("/games", getAllGames, checkIsTitleInArray, uptadeGamesArray, updateGamesFile, sendUpdaredGame);
     
     module.exports = gamesRouter; 