var axios = require("axios");

const mongo_contabo = async (data) => {
  var axios = require("axios").default;

  var options = {
    method: "POST",
    url: "http://95.111.235.214:3064/backup",
    headers: {
      cookie:
      "Content-Type": "application/json"
    },
    data: {
      ip: "95.111.235.214",
      port: "32773",
      user: "",
      password: "",
      db: data,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

module.exports = {
  mongo_contabo,
};
