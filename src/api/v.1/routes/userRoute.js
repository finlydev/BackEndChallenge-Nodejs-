const express = require('express');
const { apiGetAll, apiGetById, apiCreate, apiUpdate, apiDelete } = require('../controllers/userController');
const db = require("../../../config/connectDatabase");
const bcrypt = require('bcrypt');
const jwtTokens = require('../utils/jwt-helpers');
const authenticateToken = require('../middleware/authorization');
const router = express.Router();

router.get('/',authenticateToken,apiGetAll);
router.get('/:userid',authenticateToken, apiGetById);
router.post('/', apiCreate);
router.put('/', authenticateToken, apiUpdate);
router.delete('/:userid',authenticateToken, apiDelete);

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await db('users').where({email});
        if (users.length === 0) return res.status(400).json({ error: "Email is incorrect" });
        const validPassword = await bcrypt.compare(password, users[0].password);
        if (!validPassword) return res.status(400).json({ error: "Incorrect password" });
        //JWT
        let tokens = jwtTokens(users[0]);
        res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
        res.json({tokens, users: users[0]});
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
  });

module.exports = router;