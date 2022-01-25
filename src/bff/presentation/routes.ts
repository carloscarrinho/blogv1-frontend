import { Router } from "express";
import { container } from "../infrastructure/config/container";

const routes: Router = Router();

routes.get("/", container.get("GetHomePage").handle);

routes.get("/about", container.get("GetAboutPage").handle);

routes.get("/articles", container.get("GetArticlesPage").handle);
routes.get("/articles/:id", container.get("GetArticlePage").handle);

routes.get("/matrix", container.get("GetMatrixPage").handle);
routes.get("/matrix/new", container.get("GetNewArticlePage").handle);
routes.get("/matrix/:id", container.get("GetNewArticlePage").handle);
routes.post("/matrix/new", container.get("SaveNewArticle").handle);
routes.put("/matrix/:id", container.get("UpdateArticle").handle);
routes.delete("/matrix/:id", container.get("RemoveArticle").handle);

export default routes;
