import { createWriteStream, unlink, unlinkSync } from 'fs';
import { IWriter } from "../interfaces";

export default class Writer implements IWriter {

  private readonly _path : string;
  private readonly _prefix : string;

  constructor(path: string, prefix: string = 'f') {
    this._path = path;
    this._prefix = prefix;
  };

  private get fullPath() : string {
    return this._path + this._prefix;
  };

  public create(texts: String[], toDelete: boolean = false) : void {

    for(let i = 0; i < texts.length; i++) {

      const fileName : string = this.fullPath +  (i+1) + '.txt';

      if(toDelete) {
        this.toDeleteFn(fileName);
      } else {

        const stream = createWriteStream(fileName);
  
        stream.write(texts[i],'utf-8', (error) => {
          if(error) return console.log(error);
  
          console.log('File was wrote correctly!');
  
          stream.end();
        });

      };
    };

  };

  private toDeleteFn (fileName: string) : void {

    unlink(fileName,(err) =>{
      if(err) return console.log(err);

      console.log(`${ fileName } was deleted successfully!`);
    });

  };

}