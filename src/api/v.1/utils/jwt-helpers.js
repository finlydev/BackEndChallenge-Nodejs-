const jwt = require('jsonwebtoken');

//Generate an access token and a refresh token for this database user
function jwtTokens({ user_id, username,password}) {
  const user = { user_id, username,password}; 
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '8h' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '5m' });
  return ({ accessToken, refreshToken });
}
module.exports = jwtTokens;