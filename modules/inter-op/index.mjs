/**
 * This is a ES6 module
 * it's the entry point of the app
 * it imports a function from a commonjs module
 * it will work as long as the commonjs module exports a function as a property of an object 
 * mocule.exports = { action: action }
*/

import action from './action.js';

action();