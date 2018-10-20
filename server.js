const express = require("express")
const app = express();

app.use(express.static("public"))

app.get("*", (req,res) => {
	res.sendfile("views/index.html");
})

app.listen(7000)
