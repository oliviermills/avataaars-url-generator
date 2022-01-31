import _ from "lodash";
import  express  from 'express' ;

import { options } from "./options";


function encodeQueryData(data) {
    const ret:Array<string> = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
 }

 const getNewUrl =() => {
  let params = {};
  Object.keys(options).forEach(k => {
      params[k] = _.sample(options[k])
  })
  let queryString = encodeQueryData(params);
  const url = `https://avataaars.io/?${queryString}`
  // console.log(url)
  return url
 }




var app = express();
var PORT = 3001;
  
// Without middleware
app.get('/', function(req, res){
    res.redirect(getNewUrl());
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
