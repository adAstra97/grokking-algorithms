/**
 * 1. Order
 * @param {number} a Number
 */
function func(a) {
  if (a === 0) return;

  func(a - 1);
  console.log(a);
}

// console.log(func(4)) // 1 2 3 4 undefined

//-----------------------------------------------------------------------------------------
/**
 * 2. Countdown
 * @param {number} i Number
 */
const countdown = i => {
  console.log(i);
  // base case
  if (i <= 0) return;
  countdown(i - 1);
};

// countdown(5); // 5 4 3 2 1 0

//---------------------------------------------------------------------------------
/**
 * 3. Displays a message to the console
 * @param {string} name Name
 */
const greet2 = name => console.log(`how are you, ${name}?`);

/**
 * Displays a message to the console
 */
const bye = () => console.log("ok bye!");

/**
 * Displays a message to the console
 * @param {string} name Name
 */
const greet = name => {
  console.log(`hello, ${name}!`);
  greet2(name);
  console.log("getting ready to say bye...");
  bye();
};

greet("adit");

//---------------------------------------------------------------------
/**
 * 4. Consider the factorial of the number
 * @param {number} a Number
 * @returns {number} Result
 */
function fact(a) {
  if (a === 1) return 1;

  return a * fact(a - 1);
}

// console.log(fact(3)); // 6
