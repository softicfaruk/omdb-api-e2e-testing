const util = require('util');
const events = require('events');
const apiConfig = require('../configuration/api.config');
const moviesConfig = require('../configuration/movies.config');
const fs = require('fs');

function omdbApi () {}
util.inherits(omdbApi, events.EventEmitter);

omdbApi.prototype.command = function(success) {
  let request = require("request");
  let currentTimestamp = new Date().toDateString();

  for(let i = 0; i < moviesConfig.movies.length; i++) {
    request.get(apiConfig.url + '&t=' + moviesConfig.movies[i] + '&plot=short', function (error, response) {
      if (error) {
        console.log(error);
        return;
      }

      fs.appendFile(`Movie_Search_${currentTimestamp.trim()}.txt`, JSON.stringify(response.body), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

      success(response);
      this.emit('complete');
    }.bind(this));
  }
};

module.exports = omdbApi;