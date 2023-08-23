//console.log(process.env);
var os = require("os");
var hostname = os.hostname();   
process.env.TZ = 'Australia/Perth';
console.log("Date: " + new Date().toString())
console.log("hostname: " + hostname);
if (hostname === 'auzora01') {
  var host     = 'ebizco.com.au'; //mysql database host name
  var user     = 'c1scis'; //mysql database user name
  var password = 'MotoCare@2'; //mysql database password
  var database = 'c1scis'; //mysql database name
  var localStorage = '/home/vincep/scis/public';
  var clientID = "ihms001";
  var mqtthost = 'ebizco.com.au';
  var mqttport = 8083;
  var mqttuser = 'projman1';
  var mqttpasswd = 'cableman';
  var mqttPrivkey = '../certs/privkey.pem';
  var mqttCert = '../certs/cert.pem';
  var mqttChain = '../certs/chain.pem';
  var appPORT = 6032;
  var appPORT2 = 6031;
} else {
  var host     = 'ebizco.com.au'; //mysql database host name
  var user     = 'c1scis'; //mysql database user name
  var password = 'MotoCare@2'; //mysql database password
  var database = 'c1scis'; //mysql database name
  var localStorage = '/Users/truongvietphan/Documents/Dev/scis/public';
  var clientID = "ihms002";
  var mqtthost = 'ebizco.com.au';
  var mqttport = 8083;
  var mqttuser = 'projman2';
  var mqttpasswd = 'cableman';
  var mqttPrivkey = '/certs/privkey.pem';
  var mqttCert = '/certs/cert.pem';
  var mqttChain = '/certs/chain.pem';
  var appPORT = 6032;
  var appPORT2 = 6031;
}


module.exports = {
  host     : host,
  user     : user,
  password : password, //mysql database password
  database : database, //mysql database name
  appPORT  : appPORT,
  appPORT2 : appPORT2,
  localStorage : localStorage,
  mqtthost: mqtthost,
  mqttport: mqttport,
  mqttuser: mqttuser,
  mqttpasswd: mqttpasswd,
  mqttPrivkey: mqttPrivkey,
  mqttCert: mqttCert,
  mqttChain: mqttChain,
  clientID: clientID

}

