import "dotenv/config";
import express from "express";
import methodOverride from "method-override";
import routes from "./presentation/routes";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(routes);
app.use(express.static("views"));

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));
