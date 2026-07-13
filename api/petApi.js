const chai = require("chai");
const chaiHttp = require("chai-http");
const { BASE_URL } = require("../utils/config");

chai.use(chaiHttp);

exports.createPet = (body,Headers) => {
    return chai.request(BASE_URL)
        .post("/pet")
        .set(Headers)
        .send(body)
      
};

exports.getPet = (id) => {
    return chai.request(BASE_URL)
        .get(`/pet/${id}`);
};

exports.updatePet = (body) => {
    return chai.request(BASE_URL)
        .put("/pet")
        .send(body);
};

exports.deletePet = (id) => {
    return chai.request(BASE_URL)
        .delete(`/pet/${id}`);
};