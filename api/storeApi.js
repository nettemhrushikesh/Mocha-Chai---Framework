const chai = require("chai");
const chaiHttp = require("chai-http");
const { BASE_URL } = require("../utils/config");

chai.use(chaiHttp);

exports.createOrder = (body) => {
    return chai.request(BASE_URL)
        .post("/store/order")
        .send(body);
};

exports.getOrder = (id) => {
    return chai.request(BASE_URL)
        .get(`/store/order/${id}`);
};

exports.deleteOrder = (id) => {
    return chai.request(BASE_URL)
        .delete(`/store/order/${id}`);
};