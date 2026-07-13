const chai = require('chai');
const expect = chai.expect;

const petapi = require('./petapi1.test.cjs');
const { petcreate, petupdate } = require('./petdata1.test.cjs');

describe('pet test', () => {
    let petId;

    it('create pet', async () => {
        const res = await petapi.petcreate(petcreate);

        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        petId = res.body.id;
    });

    it('get pet', async () => {
        const res = await petapi.petget(petId);

        expect(res).to.have.status(200);
    });

    it('update pet', async () => {
        const res = await petapi.petupdate({ ...petupdate, id: petId });

        expect(res).to.have.status(200);
    });

    it('delete pet', async () => {
        const res = await petapi.petdelete(petId);

        expect(res).to.have.status(200);
    });
});

