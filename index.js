const express = require("express")
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("index"))
app.get("/about", (req, res) => res.render("about"))
app.get("/contact-me", (req, res) => res.render("contact-me"))
app.use( (req, res) => res.status(404).render("404"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
