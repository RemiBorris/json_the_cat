const needle = require("needle");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  needle.get(url,(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (!body[0]) {
      callback(`Could not locate breed "${breedName}", please check the breed and try again`, null);
      
    } else {
      callback(null, body[0]["description"]);
    }
  });
};

module.exports = {fetchBreedDescription};