const express = require("express");
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const app = express();

const articleRouter = require("./routes/articles");
const Articles = require("./models/articles");

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true });

app.set("view engine", "ejs");
// We can access all of the diff paraments from new Article page,
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

app.get("/", async (req, res) => {
  articles = await Articles.find().sort({createdAt: "desc"})
  res.render("articles/index", {articles: articles});
});

app.use("/articles", articleRouter)
app.listen(3000,()=>console.log("server is running!"));



//   articles=[
//       {
//           title:"set One",
//           createdAt:new Date().toLocaleString(),
//           description:"dummy test text bla bla blaorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum quia nihil expedita eius ab accusantium"
//       },
//       {
//           title:"set two",
//           createdAt:new Date().toLocaleString(),
//           description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum quia nihil expedita eius ab accusantium dolorem tenetur non itaque quas fuga corporis, laudantium alias placeat voluptas obcaecati! Dolorem, nesciunt."
//       },
//       {
        //   title:"set Three",
        //   createdAt:new Date().toLocaleString(),
        //   description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum quia nihil expedita eius ab accusantium dolorem tenetur non itaque quas fuga corporis, laudantium alias placeat voluptasearum quia nihil expedita eius ab accusantium dolorem tenetur non itaque quas fuga corporis, laudantium alias placeat voluptas"
//       },
//       {
//           title:"set Four",
//           createdAt:new Date().toLocaleString(),
//           description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid earum quia nihil expedita eius ab accusantium dolorem tenetur non itaque quas fuga corporis, laudantium alias placeat voluptas"
//       },
//   ]
