import { Request, Response } from "express";

export interface Command {
  handle(req: Request, res: Response): Promise<void>;
}
