const userService = require('../services/userService');

class userController {
    async apiGetAll (req, res) {
        try {
            const result = await userService.getAll(req.query);
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
            const rows = await userService.getById(req.params);
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
            const createResponse = await userService.create(req.body);
            if(createResponse){
                res.status(200).json({status: true, message: createResponse});
            }else{
                res.status(400).json({status: false, message: createResponse});
            }
        } catch (error){
            res.json(error)
        }
    }

    async apiSignup(req,res){
        try{
            const createResponse = await userService.signup(req.body);
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
            const updateResponse = await userService.update(req.body);
            if(updateResponse){
                res.status(200).json({status: true, message: updateResponse});
            }else{
                res.status(400).json({status: false, message: updateResponse});
            }
        } catch (error){
            res.json(error)
        }
    }

    async apiResetPassword(req,res){
        try{
            const updateResponse = await userService.resetPassword(req.body);
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
            const deleteResponse = await userService.delete(req.params);
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

module.exports = new userController();