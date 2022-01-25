import express from "express";
import methodOverride from "method-override";
import routes from "./presentation/routes";

const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(routes);
app.use(express.static("views"));

app.listen(port, () => console.log(`Server running at port ${port}`));
