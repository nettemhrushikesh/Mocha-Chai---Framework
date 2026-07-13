const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;
chai.use(chaiHttp);

const url = "https://petstore.swagger.io/v2";

let petId;
let orderId;

describe("Pet API Testing", () => {

    const a = {
        id: 4,
        category: {
            id: 0,
            name: "string"
        },
        name: "cat",
        photoUrls: ["string"],
        tags: [
            {
                id: 0,
                name: "string"
            }
        ],
        status: "available"
    };

    const b = {
        id: 4,
        category: {
            id: 0,
            name: "string"
        },
        name: "cat",
        photoUrls: ["string"],
        tags: [
            {
                id: 0,
                name: "kitty"
            }
        ],
        status: "available"
    };

    it("Create pet", (done) => {
        chai.request(url)
            .post("/pet")
            .set("Content-Type", "application/json")
            .send(a)
            .end((err, res) => {
                expect(res).to.have.status(200);
                petId = res.body.id;
                console.log("Pet ID:", petId);
                done();
            });
    });

    it("Get Pet", (done) => {
        chai.request(url)
            .get(`/pet/${petId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("Update Pet", (done) => {
        chai.request(url)
            .put("/pet")
            .send(b)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    // it("Delete Pet", (done) => {
    //     chai.request(url)
    //         .delete(`/pet/${petId}`)
    //         .end((err, res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         });
    // });

});

describe("Store API Testing", () => {

    const order = {
        id: 0,
        petId: 4,
        quantity: 1,
        shipDate: "2026-07-07T09:46:38.290Z",
        status: "placed",
        complete: true
    };

    it("Create order for pet", (done) => {
        chai.request(url)
            .post("/store/order")
            .send(order)
            .end((err, res) => {
                expect(res).to.have.status(200);
                orderId = res.body.id;
                done();
            });
    });

 it("Get order by id", (done)=> {
        chai
        .request(url)
        .get(`/store/order/${orderId}`)
        .set({"Content-Type": "application/json"})
        .end((err, res) => {
            expect(res).to.have.status(200)
            done()
        })
    })


    it("Delete order", (done) => {
        chai.request(url)
            .delete(`/store/order/${orderId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

});

describe("User API Testing", () => {

    const user = "user1";
    const password = "password123";

    const a = {
        id: 0,
        username: user,
        firstName: "melon",
        lastName: "joy",
        email: "joy@gmail.com",
        password: password,
        phone: "9090909090",
        userStatus: 20
    };

    it("Create User", (done) => {
        chai.request(url)
            .post("/user")
            .send(a)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property("code");
                done();
            });
    });

    it("Get User", (done) => {
        chai.request(url)
            .get(`/user/${user}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("Login User", (done) => {
        chai.request(url)
            .get("/user/login")
            .query({
                username: user,
                password: password
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    // it("Delete User", (done) => {
    //     chai.request(url)
    //         .delete(`/user/${user}`)
    //         .end((err, res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         });
    // });

});