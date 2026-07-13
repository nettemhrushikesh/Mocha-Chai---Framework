
    const chai = require('chai')
    const chaiHttp = require('chai-http')
    const expect = chai.expect
    chai.use(chaiHttp)

    const url = "https://petstore.swagger.io/v2"
    describe("Pet Api Testing", ()=> {
        let petid;
        
                    const a={
                "id": 4,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "cat",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                    "id": 0,
                    "name": "string"
                    }
                ],
                "status": "available"
    }

    

        const b={
                "id": 4,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "cat",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                    "id": 0,
                    "name": "kitty"
                    }
                ],
                "status": "available"
    }
        it("Create pet", (done)=> {

            chai
            .request(url)
            .post("/pet")
            .set({"Content-Type": "application/json"})
            .send(a)
        .end((err , res)=> {
            expect(res).to.have.status(200)
            expect(res.body).to.have.property("id")
            petid = res.body.id
            console.log(petid)
            done()
        })
    })

    it("Get Pet", (done)=> {
            chai
            .request(url)
            .get(`/pet/${petid}`)
            .set({"Content-Type": "application/json"})
            .end((err, res) => {
                expect(res).to.have.status(200)
                done()
            })
        })

        it("Update Pet" , (done)=>{
            chai
            .request(url)
            .put(`/pet`)
            .set({"Content-Type": "application/json"})
            .send(b)
            .end((err, res) => {
                expect(res).to.have.status(200)
                done()
            })
        })
    it("Delete Pet",(done)=>{
            chai
            .request(url)
            .delete(`/pet/${petid}`)
            .set({"Content-Type": "application/json"})
            .end((err,res)=>{
                expect(res).to.have.status(200)
                done();
            })
        })
    })





    
    describe("Store Api Testing", ()=> {
                    let orderid =Math.floor(Math.random()*9 + 1) ;
                    // let orderid;
                    console.log(orderid)
                    const a={
                                "id": `${orderid}`,
                                "petId": 4,
                                "quantity": 1,
                                "shipDate": "2026-07-07T09:46:38.290Z",
                                "status": "placed",
                                "complete": true
                                }

        it("Create order for pet", (done)=> {

            chai
            .request(url)
            .post("/store/order")
            .set({"Content-Type": "application/json"})
            .send(a)
        .end((err , res)=> {
            expect(res).to.have.status(200)
            expect(res.body).to.have.property("id")
            orderid = res.body.id
            done()
        })
    })

    it("Get order by id", (done)=> {
            chai
            .request(url)
            .get(`/store/order/${orderid}`)
            .set("Content-Type", "application/json")
            .end((err, res) => {
                expect(res).to.have.status(200)
                // console.log(res.body)
                done()
            })
        })


    it("Delete order",(done)=>{
            chai
            .request(url)
            .delete(`/store/order/${orderid}`)
            .set({"Content-Type": "application/json"})
            .end((err,res)=>{
                expect(res).to.have.status(200)
                done();
            })
        })


    })


    describe("User Api Testing", ()=> {

        const user = "user1"
        const password = "password"
    const a ={
                "id": 0,
                "username": `${user}`,
                "firstName": "melon",
                "lastName": "joy",
                "email": "joy@gmail.com",
                "password": `${password}`,
                "phone": "9090909090",
                "userStatus": 20
    }
    const b =[{
                "id": 0,
                "username": `${user}`,
                "firstName": "melon",
                "lastName": "joy",
                "email": "joy@gmail.com",
                "password": `${password}`,
                "phone": "9090909090",
                "userStatus": 20
    }]
    const c = {
                "id": 0,
                "username": `${user}`,
                "firstName": "melon",
                "lastName": "johnny",
                "email": "joy@gmail.com",
                "password": `${password}`,
                "phone": "9090909090",
                "userStatus": 20
                                    }
                
        it("Create User", (done)=> {

            chai
            .request(url)
            .post("/user")
            .set({"Content-Type": "application/json"})
            .send(a)
        .end((err , res)=> {
            expect(res).to.have.status(200)
            expect(res.body).to.have.property("code")
            done()
        })
    })
            
        it("Create User with list", (done)=> {

            chai
            .request(url)
            .post("/user/createWithList")
            .set({"Content-Type": "application/json"})
            .send(b)
        .end((err , res)=> {
            expect(res).to.have.status(200)
            expect(res.body).to.have.property("code")
            done()
        })
    })
            
        it("Create User with array", (done)=> {

            chai
            .request(url)
            .post("/user/createWithArray")
            .set({"Content-Type": "application/json"})
            .send(b)
        .end((err , res)=> {
            expect(res).to.have.status(200)
            expect(res.body).to.have.property("code")
            done()
        })
        })


        it("Get User", (done) => {
            chai.request(url)
                .get(`/user/${user}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it("Login User" , (done)=>{
            chai
            .request(url)
            .get(`/user/login`)
            .set({"Content-Type": "application/json"})
            .query({username: `${user}`,password: `${password}`})
            .end((err, res) => {
                expect(res).to.have.status(200)
                done()
            })
        })
        
        it("Update User", (done) => {
            chai.request(url)
                .put(`/user/${user}`)
                .send(c)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it("LoginOUT User" , (done)=>{
            chai
            .request(url)
            .get(`/user/logout`)
            .set({"Content-Type": "application/json"})
            .end((err, res) => {
                expect(res).to.have.status(200)
                done()
            })
        })
    it("Delete User", (done) => {
            chai.request(url)
                .delete(`/user/${user}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });


    })



