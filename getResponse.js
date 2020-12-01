var request = require( 'request' );
var url = "https://api.getresponse.com/v3/contacts";
var auth = 'api-key 3dvwzaxs4f15gwinoxsudek8k0hwhqi7';
request.get( {
    url: url,
    headers: {
        "X-Auth-Token": auth
    }
}, function ( error, response, body ) {
    var resp = JSON.parse( body );
    console.log( 'body : ', resp );
} );