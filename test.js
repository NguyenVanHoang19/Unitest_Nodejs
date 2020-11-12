let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();
chai.use(chaiHttp);
describe("/addSanPham",()=>{
    it("them san pham voi du tham so",(done)=>{
        const sanPham = {
            id : 1,
            ten : "dau an"
        };
        chai.request(server)
            .post("/themSanPham")
            .send(sanPham)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Them San Pham Thanh Cong');

                done();
            });
    })
    it('Neu them san pham khong du tham so', (done) => {
        let sanPham = {
            ten: "Bug"
        };
        chai.request(server)
            .post('/themSanPham')
            .send(sanPham)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("San pham khong du tham so");
                done();
            });
    });
})