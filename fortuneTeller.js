// 1st random component, when array
const when = ['in 1078 minutes', 'in 62,5 hours', 'tomorrow', 'this weekend', 'next week', 'next month', 'next year'];

// 2nd random component, what array
const what = ['you will win the lottery', 'you will meet the love of your life', 'you will stuck in the lift', 'your fridge will break down', 'it will start to snow', 'you will get an invitation from the queen', 'your neighbour will ask you for sugar', 'you will run out of toilet paper', 'there will be a blackout'];

// 3th random component, ifThan array
const ifThan = ['if you don`t shower', 'if you eat a lemon every day', 'if you put onions in your shoes', 'if you keep a slice of cheese in your pocket', 'if you put makeup on', 'if you don`t pay your bills', 'if you wear a underwear as head'];

// pick random element from array / length of array is max value, on random number the range is from 0 to max -1 which is perfect for indexing the array
const pickRandomElement = array => 
    array[Math.floor(Math.random() * array.length)]

console.log(pickRandomElement(when));