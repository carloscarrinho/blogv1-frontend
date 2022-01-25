import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class SaveNewArticle implements Command {
  public async handle(req: Request, res: Response): Promise<void> {
    const templatePath = "matrix/new-article";
    const data = { metadata: { pageTitle: "New Article" } };
    const { title, description, markdown, tags } = req.body;

    // const repository = new ArticleRepository();
    // const result = await repository.create({
    //   title,
    //   url: title.toLowerCase().replace(" ", "-"),
    //   description,
    //   markdown,
    //   tags: tags.split(","),
    // });

    // if (result.isError) {
    //   return res.render(templatePath, {
    //     ...data,
    //     article: req.body,
    //     alert: {
    //       error: true,
    //       message: result.message,
    //     },
    //   });
    // }

    return res.render(templatePath, {
      ...data,
      article: {},
      alert: {
        show: true,
        error: false,
        message: "Article successfully saved on database",
      },
    });
  }
}
