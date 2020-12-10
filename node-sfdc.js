/*var express = require( 'express' ); //Adding Expess
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
*/
var sf = require( 'node-salesforce' );
var pg = require( 'pg' );
const csv = require( 'csvtojson' )
const fs = require( 'fs' );

const { Client } = require( 'pg' );

/*const client = new Client( {
  connectionString: 'postgres://ubbmdkfcbfgkfn:89fbe24d9cf50335a0667757d318797cebda6f1d6c2904560a8431aeb9f0040d@ec2-54-75-248-49.eu-west-1.compute.amazonaws.com:5432/ddbimqs3ehvtug',
  ssl: {
    rejectUnauthorized: false
  }
} );

client.connect();

client.query( 'SELECT table_schema,table_name FROM information_schema.tables;', ( err, res ) => {
  if ( err ) throw err;
  for ( let row of res.rows )
  {
    console.log( JSON.stringify( row ) );
  }
  client.end();
} );*/


var conn = new sf.Connection( {
  oauth2: {
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com',
    clientId: '3MVG9SemV5D80oBcnvp.8CVjFSZsYXFOO5ZSxZPo_eIgsVFAeW.GKAW60IElPX92EBcyuZmSILsQp3WRsdMCc',
    clientSecret: 'F59458678AAA4B5DA0E427E11A68D4F042ECB6147C83AD2FD695EB6AC1E913E7',
    redirectUri: 'http://localhost:3000/auth/sfdc/callback'
  }
} );
conn.login( 'absidhartha-sgkg@force.com', 'mankind4', function ( err, userInfo ) {
  if ( err ) { return console.error( err ); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log( conn.accessToken );
  console.log( conn.instanceUrl );
  // logged in user property
  console.log( "User ID: " + userInfo.id );
  console.log( "Org ID: " + userInfo.organizationId );
  // ...
  var csvFileOut = require( 'fs' ).createWriteStream( 'F:/EmailMessage.csv' );
  conn.query( "SELECT Id, ActivityId, TextBody, HtmlBody, FromName FROM EmailMessage" )
    .stream() // Convert to Node.js's usual readable stream.
    .pipe( csvFileOut );
} );

const converter = csv()
  .fromFile( 'F:/EmailMessage.csv' )
  .then( ( json ) => {
    console.log( json );
  } )
