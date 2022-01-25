import { ResultErrorStatuses } from "./result-error-statuses";

export class ResultError<T> {
  public readonly message: string;

  public readonly status: ResultErrorStatuses;

  public readonly isError = true;

  public readonly data: T;

  public constructor(
    message: string, 
    status: ResultErrorStatuses = ResultErrorStatuses.ERROR,
    data: T = null
  ) {
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
