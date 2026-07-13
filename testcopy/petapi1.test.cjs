
//    mocha \"./testcopy/pettest1.test.cjs\""
const chai = require('chai');
const chaiHttp = require('chai-http');
const { BASE_URL } = require('../testing-1/utils/config');

chai.use(chaiHttp);

exports.petcreate = (body) => {
    return chai.request(BASE_URL)
        .post('/pet')
        .send(body);
};

exports.petget = (id) => {
    return chai.request(BASE_URL)
        .get(`/pet/${id}`);
};

exports.petupdate = (body) => {
    return chai.request(BASE_URL)
        .put('/pet')
        .send(body);
};

exports.petdelete = (id) => {
    return chai.request(BASE_URL)
        .delete(`/pet/${id}`);
};