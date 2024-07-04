const { sign, verify } = require("jsonwebtoken");

const generateToken = (payload)=>{
    return sign(
        payload,
        process.env.SECRET_JWT_SEED,
        {expiresIn: '1h'}
    )
}

const validateToken = ( token )=>{
    return verify(
            token,
            process.env.SECRET_JWT_SEED
            
        )
    }


module.exports = {
    generateToken,
    validateToken
}