const Octokit = require("@octokit/rest");
const auth = require("../../config/github");

module.exports = new Octokit({
  auth
});
