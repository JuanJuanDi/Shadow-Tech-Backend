const { sign } = require("jsonwebtoken");

const generateToken = (payload)=>{
    return sign(
        payload,
        process.env.SECRET_JWT_SEED,
        {expiresIn: '1h'}
    )
}

module.exports = {
    generateToken
}