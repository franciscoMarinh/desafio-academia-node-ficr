const rateLimit = require("express-rate-limit");

/* Memory Store (default, built-in) - stores hits in-memory in the Node.js process. 
Does not share state with other servers or processes.

Redis Store or Mongo Store

*/

module.exports = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 20 // limit each IP to 80 requests per windowMs
});
