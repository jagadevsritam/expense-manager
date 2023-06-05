import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DebugService {

  constructor() { }
  info(message : String) : void {
     console.log(message);
  }
}
