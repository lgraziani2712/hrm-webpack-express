/**
 * @author Luciano Graziani @lgraziani2712
 * @license {@link http://www.opensource.org/licenses/mit-license.php|MIT License}
 *
 */
const express = require('express');

const main = express();

/*********************
 * Middlewares
 *********************
 */
main.use((req, res, next) => {
  console.log('Times: %d', Date.now());
  next();
});

/*********************
 * Routes
 *********************
 */
main.get('/', (req, res) => {
  res.send('hello perra');
});


module.exports = main;
