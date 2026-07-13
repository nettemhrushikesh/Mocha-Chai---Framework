const chai= require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
chai.use(chaiHttp)
 
 
const url ="https://gorest.co.in/"
describe("Go Rest API Practice", ()=>{
    const token = "d9d8676a6b4dd65259e2bf38c530180dfe8ce268f99037e6acc67a33cb6f6d7f"
    const a={
 
        "name":"Tenali123",
        "gender":"male",
        "email":"tenali978.ramakrishna@456789.com",
         "status":"active"
    }
     const b={
 
        "name":"Robin2325",
        "gender":"male",
        "email":"robhin.hood@45689.com",
         "status":"active"
    }
    it("Create user", (done)=>{
       
       chai
       .request(url)
       .post("public/v2/users")
       .set("Authorization","Bearer " +`${token}`)
       .send(a)
      .end((err, res)=>{
        expect(res).to.have.status(201)
        expect(res.body).to.have.property("id")
        this.restid = res.body.id
         console.log(this.restid)
        done()
       
   
 
    })
})
 
it("Get user",(done)=>{
   
    chai
    .request(url)
    .get(`public/v2/users/${this.restid}`)
    .set("Authorization", "Bearer " + `${token}`)
    .end((err,res)=>{
        expect(res).to.have.status(200)
       
        done();
        // console.log(res.body)
    })
})
    it("Update user", (done)=>{
 
        chai
        .request(url)
        .put(`public/v2/users/${this.restid}`)
        .set("Authorization", "Bearer " + `${token}`)
        .send(b)
            .end((err,res)=>{
                expect(res).to.have.status(200)
                done();
            })
    })
    it("Delete user",(done)=>{
        chai
        .request(url)
        .delete(`public/v2/users/${this.restid}`)
        .set("Authorization", "Bearer " +`${token}`)
        .end((err,res)=>{
            expect(res).to.have.status(204)
            done();
        })
    })
 
})
 


