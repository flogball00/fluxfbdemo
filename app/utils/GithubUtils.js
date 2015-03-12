var appConstants = require('../constants/appConstants');
var axios = require('axios');

var id = "cf300112b00ce0a82cc1";
var sec = "c878e05df8b70bf2e03fe19c50c53b4f600a7373";
var param = "?client_id=" + id + "&client_secret=" + sec;

var githubUtils = {
  getBio: function(username){
    var url = "https://api.github.com/users/" + username + param;
    return axios.get(url);
  },
  getRepos: function(username){
    var url = "https://api.github.com/users/" + username + "/repos" + param;
    return axios.get(url);
  }
};

module.exports = githubUtils;