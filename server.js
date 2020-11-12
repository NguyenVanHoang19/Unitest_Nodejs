const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())
app.use(bodyParser.json());
const CRUD_SanPham = require("./sanpham_crud")
app.listen(5000,(err)=>{
    if(err)
        console.log(err)
    else    
        console.log("server running port : " ,5000)
})

// them san pham 

app.post("/themSanPham",(req,res)=>{
    const {id,ten} = req.body;
    const sanPham = {
        id : id,
        ten : ten
    };
    CRUD_SanPham.addSanPham(sanPham,(err,newSanPham)=>{
        if(err){
            res.send(err);
            return;
        }
        else{
            res.send({
                message : "Them San Pham Thanh Cong",
                sanPham : newSanPham
            });
        }
    });
})
module.exports = app