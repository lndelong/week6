var expect = chai.expect;

describe('My Functions', function() {
    describe('#addSum', function() {
      it('should add 3 arguments', function() {
        var x = doMath(1,2,3);
        expect(x).to.equal(6);
      });

      it('should throw an error if anwer is not 6', function() {
        expect(function() {
          addSum(2,3,4);
      }).to.throw(Error);
      });  
  });
});
