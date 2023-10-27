const productModel = require('../models/productModel');

class productService {
    getAll() {
        return productModel.getAll();
    }

    getById(GetById) {
        const {userid,currency} = GetById;
        return productModel.getById(userid,currency);
    }

    create(createFields){
        const {userid,name,price,currency} = createFields;
        return productModel.create(userid,name,price,currency);
    }

    update(updateFields){
        const {productid,userid,name,price,currency} = updateFields;
        return productModel.update(productid,userid,name,price,currency);
    }

    delete(deleteFields) {
        const {productid} = deleteFields;
        return productModel.delete(productid);
    }
}

module.exports = new productService();