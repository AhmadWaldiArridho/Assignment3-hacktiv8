const jwt = require("jsonwebtoken");
const SECRET_KEY = "inirahasia";


function generateToken(payload) {

    const token = jwt.sign(payload, SECRET_KEY);
    return token;
}

function verfyToken(token) {
    const decoded = jwt.verify(token, SECRET_KEY)
    return decoded;
}


module.exports = {
    generateToken,
    verfyToken
}