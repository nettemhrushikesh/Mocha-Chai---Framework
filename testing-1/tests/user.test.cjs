const userApi = require("../api/userApi");
const chai = require("chai");
const expect = chai.expect;



const {
    user,
    password,
    createUser,
    createUserArray,
    updateUser,
    createUserdata
} = require("../data/userData");

describe("User API", () => {

    it("Create User", async () => {
        const res = await userApi.createUser(createUser);

        expect(res).to.have.status(200);
    });

    it("Get User", async () => {
        const res = await userApi.getUser(user);
          console.log(res.body)


        expect(res).to.have.status(200);
    });

    it("Login", async () => {
        const res = await userApi.login( user, password);
             expect(res).to.have.status(200);
    });

    it("Update User", async () => {
        const res = await userApi.updateUser(user,updateUser);
        expect(res).to.have.status(200);
        console.log(res.body)
    }); 


   it("Get User", async () => {
        const res = await userApi.getUser(user);
          console.log(res.body)


        expect(res).to.have.status(200);
    });


    it("Logout", async () => {
        const res = await userApi.logout();

        expect(res).to.have.status(200);
    });

    it("Delete User", async () => {
        const res = await userApi.deleteUser(user);

        expect(res).to.have.status(200);
    });
});