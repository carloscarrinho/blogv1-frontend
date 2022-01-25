import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class GetNewArticlePage implements Command {
  public async handle(req: Request, res: Response): Promise<void> {
    const templatePath = "matrix/new-article";
    const data = {
      metadata: { pageTitle: "New Article" },
    };
    const { id } = req.params;

    if (!id) {
      return res.render(templatePath, {
        ...data,
        article: {},
        alert: { show: false },
      });
    }

    // if (article.isError) {
    //   return res.render(templatePath, {
    //     ...data,
    //     article: {},
    //     alert: {
    //       show: true,
    //       error: true,
    //       message: article.message,
    //     },
    //   });
    // }

    return res.render(templatePath, {
      ...data,
      article: {},
      alert: { show: false },
    });
  }
}
