import chai from 'chai';
import myApp from '../main';

const { assert } = chai;

describe('Fizz Buzz', () => {
  describe('Fizz Buzz test', () => {
    it('should return Fizz for 3', () => {
      assert.equal(myApp(3), 'Fizz');
    });
    it('should return 13 for 13', () => {
      assert.equal(myApp('13'), 13);
    });
    it('should return Buzz for 5', () => {
      assert.equal(myApp('5'), 'Buzz');
    });
    it('should return Please enter a valid number', () => {
      assert.equal(myApp('hello'), 'Please enter a valid number');
    });
    it('should return Please enter a valid number greater than 0', () => {
      assert.equal(myApp('0'), 'Please enter a valid number');
    });
    it('should return fizzBuzz for 15', () => {
      assert.equal(myApp(15), 'FizzBuzz');
    });
    it('should return Enter number greater than 0', () => {
      assert.equal(myApp('-1'), 'Enter number greater than 0');
    });
    it("should return Please enter a valid number for '' ", () => {
      assert.equal(myApp("''"), 'Please enter a valid number');
    });
  });
});
