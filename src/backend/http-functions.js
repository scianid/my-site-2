
import { ok, badRequest } from 'wix-http-functions';

export function get_multiply(request) {

    const response = {
        "headers": {
            "Content-Type": "application/json"
        }
    }

    try {

    const d1 = new Date().getTime()
    const l = require('./lods/lodash.min.js')
    const d2 = new Date().getTime()


        response.body = {
            "res": d2 - d1
        }
        setTimeout( x => process.exit(), 300)
        return ok(response);
    
    } catch (err) {
        response.body = {
            "error": err
        }
        return badRequest(response);
    }
}