async function hhhhh( isok ) {
    if ( isok ) return 'hi'
    throw new Error( 'bye' )
}
console.assert( hhhhh( true ), 'hi' )
