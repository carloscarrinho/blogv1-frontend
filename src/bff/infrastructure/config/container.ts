import { ContainerBuilder } from "node-dependency-injection";
import { GetAboutPage } from "../../application/commands/get-about-page";
import { GetHomePage } from "../../application/commands/get-home-page";
import { GetArticlesPage } from "../../application/commands/get-articles-page";
import { GetMatrixPage } from "../../application/commands/get-matrix-page";
import { GetNewArticlePage } from "../../application/commands/get-new-article-page";
import { GetArticlePage } from "../../application/commands/get-article-page";
import { SaveNewArticle } from "../../application/commands/save-new-article";
import { RemoveArticle } from "../../application/commands/remove-article";
import { UpdateArticle } from "../../application/commands/update-article";

export const container = new ContainerBuilder();

// Infrastructure

// Application
container.register("GetHomePage", GetHomePage);
container.register("GetAboutPage", GetAboutPage);
container.register("GetArticlesPage", GetArticlesPage);
container.register("GetArticlePage", GetArticlePage);
container.register("GetMatrixPage", GetMatrixPage);
container.register("GetNewArticlePage", GetNewArticlePage);

container.register("SaveNewArticle", SaveNewArticle);
container.register("RemoveArticle", RemoveArticle);
container.register("UpdateArticle", UpdateArticle);
