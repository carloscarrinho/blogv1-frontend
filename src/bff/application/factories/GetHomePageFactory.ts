import { GetHomePage } from "../commands/get-home-page";
import { container } from "../../infrastructure/config/container";

export class GetHomePageFactory {
  public create(): GetHomePage {
    return container.get("GetHomePage");
  }
}
