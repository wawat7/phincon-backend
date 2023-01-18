export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isPrimeNumber = (number) => {
  let divider = 0;
  for (let i = 1; i < number; i++) if (number % i == 0) divider++;

  if (divider == 2) return true;
  return false;
};

export const fibonacciSequence = (n) => {
    return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}
