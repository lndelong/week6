var expect = chai.expect;

describe('My Functions', function() {
    describe('#addSum', function() {
      it('should add 3 arguments', function() {
        var x = doMath();
        expect(x).to.equal(6);
      });

      it('should throw an error if the result is not 6', function() {
        expect(function() {
          addPoints(5);
        }).to.throw.apply(Error);
      });
    });
});