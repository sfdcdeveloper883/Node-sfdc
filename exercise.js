export let fname = 'sidhartha';

const srrNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
for ( let i = 0; i < srrNum.length; i++ )
{
    console.log( i );
}

srrNum.forEach( ( srr, index ) => {
    console.log( srr );
} );

const canDrink = srrNum.filter( function ( srr ) {
    if ( srr > 2 )
    {
        return true;
    }
} );
console.log( canDrink );

const canDrink1 = srrNum.filter( srr => srr > 2 );
console.log( canDrink1 );