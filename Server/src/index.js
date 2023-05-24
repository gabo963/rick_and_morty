const http = require('http');
const obj = require( './utils/data' );
const PORT = 3001;

http.createServer( (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');

	const {url} = req;

    if ( url.includes('/rickandmorty/character/') ) {
        const id = url.split('/')[3];

        if ( obj[id] ) {
            res.writeHead(200, {'Content-Type': 'application/json'} )
            res.end( JSON.stringify(obj[id]) );
        }
        else {
            res.writeHead(404);
            res.end();
        }
    }
    else {
        res.writeHead(404);
        res.end();
    }


}).listen(PORT, 'localhost');