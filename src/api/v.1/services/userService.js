const userModel = require('../models/userModel');

class userService {
    getAll() {
        return userModel.getAll();
    }

    getById(GetById) {
        const {userid} = GetById;
        return userModel.getById(userid);
    }

    getDefaultById(getDefaultById) {
        const {userid} = getDefaultById;
        return userModel.getDefaultById(userid);
    }

    create(createFields){
        const {name,email,password} = createFields;
        return userModel.create(name,email,password);
    }
    
    update(updateFields){
        const {userid,name,email,password} = updateFields;
        return userModel.update(userid,name,email,password);
    }

    delete(deleteFields) {
        const {userid} = deleteFields;
        return userModel.delete(userid);
    }
}

module.exports = new userService();