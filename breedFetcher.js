const needle = require("needle");
const input = process.argv[2];


needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${input}`,(error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (!body[0]) {
    console.log(`Could not locate breed "${input}", please check the breed and try again`);
    return;
  }
  console.log(body[0]["description"]);
});
