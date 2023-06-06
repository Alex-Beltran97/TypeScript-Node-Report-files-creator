import { IRequest } from '../interfaces';

export default class Request implements IRequest {

  private readonly _limit: number;
  private readonly _url: string;

  constructor(limit: number, url: string) {

    this._limit = limit;
    this._url = url;

  };

  public async getData () : Promise<String[]>  {

    const results : String[] = [];
    
    for(let i = 0; i < this._limit; i++) {
      
      const data = await fetch(this._url + (i+1));
      const todo = await data.json();

      results.push(JSON.stringify(todo));
    };

    return results;
  };

};
