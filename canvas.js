const https = require('https');
const qs = require('qs');

class Canvas {
    constructor(url, token) {
        this.base_url = url;
        this.hostname = url.replace('https://', '');
        this.api_url =  url + "/api/v1";
        this.api_path = "/api/v1";
        this.token = token;
        this.auth_header = {'Authorization': 'Bearer ' + token};
    }
    get(path, params={}) {
        let options = {
            hostname: this.hostname,
            path: this.api_path + path + qs.stringify(params),
            headers: this.auth_header
        }
        console.log(options)
        let req = https.get(options, (res) => {
            let buffer = ''
            res.on('data', (d) => {
                buffer += d;
            });
            res.on('end', d => {
                //console.log(buffer);
            })
        }).on('error', error => {
            console.error(error)
        });
        console.log(buffer)
        req.end()

    }
    
}

module.exports = {Canvas};