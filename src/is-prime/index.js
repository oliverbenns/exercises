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

isPrime(10); // false
isPrime(12); // false
isPrime(13); // true
isPrime(61); // true
isPrime(1); // false
