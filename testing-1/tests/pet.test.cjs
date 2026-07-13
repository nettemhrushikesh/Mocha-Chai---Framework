// "test": "mocha \"./tests/**/*.test.cjs\""


const chai = require("chai");
const expect = chai.expect;

const petApi = require("../api/petApi");

const {
    createPet,
    updatePet,
    Headers
} = require("../data/petdata");

describe("Pet API", () => {
    let petId;

    it("Create Pet", async () => {
        const res = await petApi.createPet(createPet,Headers);

        expect(res).to.have.status(200);

        petId = res.body.id;
    });

    it("Get Pet", async () => {
        const res = await petApi.getPet(petId);

        expect(res).to.have.status(200);
    });

    it("Update Pet", async () => {
        const res = await petApi.updatePet(updatePet);

        expect(res).to.have.status(200);
    });

    it("Delete Pet", async () => {
        const res = await petApi.deletePet(petId);

        expect(res).to.have.status(200);
    });
}); 