var assert = require('assert');



describe('Array', function() {
  context('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('should return the index when the value is present', function() {
      assert.equal(0, [1,2,3].indexOf(1));
      assert.equal(2, [1,2,3].indexOf(3));
    });
  });

  context('#length', function () {
    it('should return 0 when there are no values in the array', function() {
      assert.equal(0, [].length);
    });

    it('should return the number of items in the array', function() {
      assert.equal(3, [1,2,3].length);
    });
  });

  context('#pop()', function() {
    // pending test below
    it('should remove last element of array and return it');
  });
});
