var express = require( 'express' ); //Adding Expess
var http = require( 'http' ); //Adding http
var jsforce = require( 'jsforce' ); //Adding JsForce
var app = express();
app.set( 'port', process.env.PORT || 3001 );
app.get( '/', function ( req, res ) {
    var conn = new jsforce.Connection( {
        // you can change loginUrl to connect to sandbox or prerelease env.
        loginUrl: 'https://test.salesforce.com'
    } );
    var username = 'sidhartha.mohapatra@maersk.com.sfdcfox';
    var password = 'Sidapr@20200otW0AxpV6gnDF2ecpXUVwUE';
    conn.login( username, password, function ( err, userInfo ) {
        if ( err ) { return console.error( err ); }
        // Now you can get the access token and instance URL information.
        // Save them to establish connection next time.
        console.log( conn.accessToken );
        console.log( conn.instanceUrl );
        // logged in user property
        console.log( "User ID: " + userInfo.id );
        console.log( "Org ID: " + userInfo.organizationId );

        //Perform SOQL Here

        var records = [];
        conn.query( "SELECT Id, Name FROM Account", function ( err, result ) {
            if ( err ) { return console.error( err ); }
            console.log( "total : " + result.totalSize );
            console.log( "fetched : " + result.records.length );
        } );

        res.send( 'heySalesforce : JSForce Connect Successed!' );
    } );
} );
http.createServer( app ).listen( app.get( 'port' ), function () {
    console.log( 'Express server listening on port ' + app.get( 'port' ) );
} );