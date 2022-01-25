import { Request, Response } from "express";
import { Command } from "../contracts/command";

export class GetHomePage implements Command {
  async handle(_: Request, res: Response): Promise<void> {
    const templatePath = "home";
    const data = {
      metadata: { pageTitle: "Home" },
    };

    return res.render(templatePath, data);
  }
}
