export class ResultSuccess<T> {
  public readonly data: T;

  public readonly isError = false;

  public readonly status = "SUCCESS";

  public constructor(result: T) {
    this.data = result;
  }
}
