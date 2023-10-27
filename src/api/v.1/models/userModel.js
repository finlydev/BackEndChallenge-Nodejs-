const db = require("../../../config/connectDatabase");
const bcrypt = require("bcrypt");
class userModel {
  async getAll() {
    const rows = await db("users")
      .select(
        "users.id as userid",
        "users.name as name",
        "users.email as email",
        "users.createdat as createdat",
        "users.updatedat as updatedat"
      )
      .orderBy("users.createdat", "desc");
    return rows;
  }

  async getById(userid) {
    const rows = await db("users")
      .select(
        "users.id as userid",
        "users.name as name",
        "users.email as email",
        "users.createdat as createdat",
        "users.updatedat as updatedat"
      )
      .where("id", userid)
      .orWhere("status", userid)
      .orderBy("users.createdat", "desc");
    return rows;
  }

  async create(name,email,password) {
    if (password.length >= 8) {
      const salt = await bcrypt.genSaltSync(10);
      const hashPassword = await bcrypt.hashSync(password, salt);

      const userid = Math.floor(111111111111 + Math.random() * 999999999999);

      let result = await db("users").where("email", "=", email);
      if (result == 0) {
        await db("users").insert({
          id: userid,
          name,
          email,
          password: hashPassword,
          createdat: db.fn.now(),
        });
        return "You have been added";
      } else {
        return "Email already to used";
      }
    } else {
      return "Password must more than 8 characters";
    }
  }


  async update(userid,name,email,password) {
    await db("users")
      .update({
        name: name,
        email: email,
        password: password,
        updatedat: db.fn.now(),
      })
      .where("id", userid);
    return "You have been updated";
  }

  async delete(userid) {
    await db("users").where("id", userid).del();
    return "You have been deleted";
  }
}

module.exports = new userModel();
