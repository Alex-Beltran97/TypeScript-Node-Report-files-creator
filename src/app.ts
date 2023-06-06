import { join } from 'path';

import Request from './models/Request';
import Writer from './models/Writer';
import RequestWriter from './models/RequestWriter';

const request : Request = new Request(
  5, 
  'https://jsonplaceholder.typicode.com/todos/'
);

const writer : Writer = new Writer(
  join(__dirname, '../files/')
);

const requestWriter : RequestWriter = new RequestWriter(
  request,
  writer
);

// requestWriter.create();
// requestWriter.delete();