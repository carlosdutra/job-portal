const { port } = require("./config");
const express = require("express");
const useCors = require("./middlewares/cors");

const app = express();

// Use JSON
app.use(express.json());

// CORS
useCors(app);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
