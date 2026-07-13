const chai = require("chai");
const chaiHttp = require("chai-http");
const { BASE_URL } = require("../utils/config");

chai.use(chaiHttp);

exports.createUser = (body) => {
    return chai.request(BASE_URL)
        .post("/user")
        .send(body);
};

exports.getUser = (username) => {
    return chai.request(BASE_URL)
        .get(`/user/${username}`);
};

exports.updateUser = (username, body) => {
    return chai.request(BASE_URL)
        .put(`/user/${username}`)
        .send(body);
};

exports.deleteUser = (username) => {
    return chai.request(BASE_URL)
        .delete(`/user/${username}`);
};

exports.login = (username, password) => {
    return chai.request(BASE_URL)
        .get("/user/login")
        .query({
            username,
            password
        });
};

exports.logout = () => {
    return chai.request(BASE_URL)
        .get("/user/logout");
};

function replaceProperty(obj, key, value) {
  return {
    ...obj,
    [key]: value
  };
}

exports.replaceProperty = replaceProperty;





// function replaceProperty(obj, firstName, value) {
//   /*
//    * Replaces a specific property from the request.
//    */
//   for (const prop in obj) {
//     if (prop === firstName) {
//       obj[prop] = value;
//     } else if (typeof obj[prop] === "object") {
//       replaceProperty(obj[prop], firstName, value);
//     }
//   }
// }
// exports.replaceProperty = replaceProperty;