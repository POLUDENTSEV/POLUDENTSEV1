const express = require("express");
const path = require("path");

const mainRoute = require('./routes/main')
const gamesRoute = require('./routes/games')

const bodyParser = require("body-parser")

const cors = require("./middlewares/cors")

const PORT = 3000;
const app = express();

app.use(cors, bodyParser.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(mainRoute, gamesRoute);

app.listen(PORT, () => {
    console.log(`Приложение запущено тут: http://localhost:${PORT}`);
});


