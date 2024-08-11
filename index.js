const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlShortner = require("./models/urlShortner");

mongoose.connect("mongodb://localhost/urlShortenerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    const shortner = await urlShortner.find();
    res.render("index", { shortner: shortner });
})

app.post("/shorturls", async (req, res) => {
    await urlShortner.create({ full: req.body.originalUrl });
    res.redirect("/");
})

app.get("/:shorturl", async(req,res)=>{
    const short=await urlShortner.findOne({short:req.params.shorturl});
    if(short==null) return res.sendStatus(404);
    short.clicks++;
    short.save();
    res.redirect(short.full);
})

app.listen(process.env.PORT || 3000);