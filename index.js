require('dotenv').config(); // load .env file

console.log('Hello World!')
console.log(process);
console.log(__dirname);
console.log(__filename);

// how to access .env variable
console.log(process.env.PORT);
console.log(process.env.BASE_URL);
