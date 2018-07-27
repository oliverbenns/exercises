// Twitch interview question
// Create a function to find if a number is prime.

const isPrime = num => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = isPrime;
