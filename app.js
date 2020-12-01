const http = require( 'https' )

var options = {
    host: 'api.getresponse.com',
    path: '/v3/contacts',
    method: 'GET',
    headers: {
        'X-Auth-Token': 'api-key 3dvwzaxs4f15gwinoxsudek8k0hwhqi7'
    }
};

setInterval( function () {
    http.get( options, ( response ) => {

        var result = ''
        response.on( 'data', function ( chunk ) {
            result += chunk;
        } );

        response.on( 'end', function () {
            var a = JSON.parse( result );
            a.forEach( function ( a ) {
                var email = a.email;
                console.log( email );
            } );
        } );

    } );
}, 10000 );
console.log( "service running on 3000 port...." );