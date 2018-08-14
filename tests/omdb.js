'use strict';

module.exports = {
  "Retrieve Movies from OMDB API and write to file": function (client) {
     client.omdbApi(function (response) {
      console.log(response.body);
      var data = JSON.parse(response.body);
      console.log(data.status);

      client.assert.equal(response.statusCode, 200, "200 OK");

      client.end();
    });

  }

};