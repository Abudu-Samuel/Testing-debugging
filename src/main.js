const fizzBuzz = (num) => {
  let output = '';
  if (!Number(num)) return 'Please enter a valid number';
  if (num % 3 === 0) {
    output += 'Fizz';
  }
  if (num % 5 === 0) {
    output += 'Buzz';
  }
  if (num < 0) {
    output = 'Enter number greater than 0';
  }
  if (output.length === 0) {
    return Number(num);
  }
  return (output);
};

export default fizzBuzz;

