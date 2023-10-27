const productService = require('../services/productService');

class productController {
    async apiGetAll (req, res) {
        try {
            const result = await productService.getAll(req.query);
            if(result){
                res.status(200).send({status: true, data:result});
            }else{
                res.status(400).send({status: false, message: result});
            }
        } catch (error) {
            res.json(error)
        }
    }
    async apiGetById (req, res) {
        try {
            const rows = await productService.getById(req.query);
            if(rows){
                res.status(200).json({data: rows});
            }else{
                res.status(400).json({message: rows});
            }
        } catch (error) {
            res.json({error})
        }
    }
    async apiCreate(req,res){
        try{
            const createResponse = await productService.create(req.body);
            if(createResponse){
                res.status(200).json({status: true, message: createResponse});
            }else{
                res.status(400).json({status: false, message: createResponse});
            }
        } catch (error){
            res.json(error)
        }
    }

    async apiUpdate(req,res){
        try{
            const updateResponse = await productService.update(req.body);
            if(updateResponse){
                res.status(200).json({status: true, message: updateResponse});
            }else{
                res.status(400).json({status: false, message: updateResponse});
            }
        } catch (error){
            res.json(error)
        }
    }

    async apiDelete(req,res) {
        try {
            const deleteResponse = await productService.delete(req.params);
            if(deleteResponse){
                res.status(200).json({status: true, message: deleteResponse});
            }else{
                res.status(400).json({status: false, message: deleteResponse});
            }
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new productController();