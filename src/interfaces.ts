export interface IRequest {
  getData() : Promise<String[]>;
};

export interface IWriter {
  create(texts: String[], toDelete?: boolean) : void;
};
