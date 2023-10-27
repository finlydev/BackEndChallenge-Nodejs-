const db = require("../../../config/connectDatabase");

class productModel {
    async getAll() {
        const result = await db('products')
        .innerJoin("users", "users.id", "products.userid")
            .select(
                "products.id as productid",
                "products.name as name",
                "products.price as price",
                "products.price as price",
                "products.createdat",
                "products.updatedat",

                "users.name as userName",
                "users.email as email",
            )
            .orderBy("products.createdat", "desc");
        return result;
    }

    async getById(userid,currency) {
        var result = "";
        if(userid && currency){
            result = await db('products')
                .innerJoin("users", "users.id", "products.userid")
                    .select(
                        "products.id as productid",
                        "products.name as name",
                        "products.price as price",
                        "products.currency as currency",
                        "products.createdat",
                        "products.updatedat",

                        "users.name as userName",
                        "users.email as email",
                    )
                    .where({"products.userid":userid, "products.currency":currency})
                    .orderBy("products.createdat", "desc");
        }else{
            result = await db('products')
            .innerJoin("users", "users.id", "products.userid")
            .select(
                "product.id as productid",
                "product.name as name",
                "product.price as price",
                "product.price as price",
                "product.createdat",
                "product.updatedat",

                "users.name as userName",
                "users.email as email",
            )
            .where({"products.id": productid})
            .orderBy("products.createdat", "desc");
        }
        return result;
    }


    async create(userid,name,price,currency) {
        const productid = Math.floor(111111 + Math.random() * 999999);
        await db('products')
            .insert({ id:productid,userid,name,price,currency,createdat: db.fn.now()});
        return "Successfully added";
    }


    async update(productid,userid,name,price,currency) {
        await db('products')
            .update({userid,name,price,currency,updatedat: db.fn.now(),})
            .where('id', productid);
        return "Successfully updated";
    }

    async delete(productid) {
        await db('products')
            .where('id', productid)
            .del();
        return "Successfully deleted";
    }
}

module.exports = new productModel();