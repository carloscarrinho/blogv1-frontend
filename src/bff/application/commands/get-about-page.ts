import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class GetAboutPage implements Command {
  public async handle(_: Request, res: Response): Promise<void> {
    const templatePath = "about/index";
    const data = {
      metadata: { pageTitle: "About" },
    };

    res.render(templatePath, data);
  }
}
