
import { Permissions, webMethod } from "wix-web-module";

export const multiply = webMethod(
  Permissions.Anyone, 
  (factor1, factor2) => { 
    const d1 = new Date().getTime()
    const l = require('backend/lods')
    const d2 = new Date().getTime()

    console.log(d2-d1);
    
    return factor1 * factor2 
  }
);
