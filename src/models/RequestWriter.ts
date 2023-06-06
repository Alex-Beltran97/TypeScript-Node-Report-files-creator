import { IRequest, IWriter } from "../interfaces";

export default class RequestWriter {

  private readonly _request : IRequest;
  private readonly _writer : IWriter;

  constructor(request: IRequest, writer: IWriter) {

    this._request = request;
    this._writer = writer;

  };

  public async create() : Promise<void> {

    this._writer.create(await this._request.getData());

  };

  public async delete() : Promise<void> {

    this._writer.create(await this._request.getData(), true);

  };

};