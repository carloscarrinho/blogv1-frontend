import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class GetMatrixPage implements Command {
  public async handle(_: Request, res: Response): Promise<void> {
    const templatePath = "matrix/index";
    const data = {
      metadata: { pageTitle: "Matrix" },
    };

    // if (articles.isError) {
    //   console.log(articles.message);

    //   return res.render(templatePath, {
    //     ...data,
    //     alert: {
    //       show: true,
    //       error: true,
    //       message: articles.message,
    //     },
    //     articles: {},
    //   });
    // }

    return res.render(templatePath, {
      ...data,
      alert: {
        show: false,
      },
      articles: {},
    });
  }
}
