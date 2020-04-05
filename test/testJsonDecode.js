var JSON6 = require( ".." );

describe('JSON decoding', function () {
    it('Unicode escapes', function () {
        var result = JSON6.parse( '"\\u004D\\u004e\\u004F\\u0050"' );
        console.log( "MNOP=", result );
        expect(result).to.equal('MNOP');
    });
});
