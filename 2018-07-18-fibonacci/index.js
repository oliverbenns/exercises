// Write a function to return an n element in Fibonacci sequence

const fibonacci = n => {
  if (n < 2) {
    return n
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};

module.exports = fibonacci;
