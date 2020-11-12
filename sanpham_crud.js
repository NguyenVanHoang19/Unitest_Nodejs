// data
let ListSanPham = [
    {id : 1, ten : "Dau an"},
    {id : 2, ten : "Banh mi"},
    {id : 3, ten : "Sua tuoi"}
];

module.exports.addSanPham= (sanPham,callback) =>{
    const {id,ten} = sanPham;
    if(!id && !ten){
        callback("San pham khong du tham so");
        return;

    }
    sanPham = {
        id : id,
        ten : ten
    };
    ListSanPham.push(sanPham);
    callback(null,sanPham);
}