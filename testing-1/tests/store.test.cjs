const chai = require("chai");
const expect = chai.expect;

const storeApi = require("../api/storeApi");
const { createOrder } = require("../data/storeData");

describe("Store API", () => {
    let orderId = Math.floor(Math.random() * 1000);

    it("Create Order", async () => {
        const res = await storeApi.createOrder(
            createOrder(orderId)
        );

        expect(res).to.have.status(200);

        orderId = res.body.id;
    });

    it("Get Order", async () => {
        const res = await storeApi.getOrder(orderId);

        expect(res).to.have.status(200);
    });

    it("Delete Order", async () => {
        const res = await storeApi.deleteOrder(orderId);

        expect(res).to.have.status(200);
    });
});