const joi  = require('joi');

const schema =joi.object({
    user_name:joi.string().min(4).max(50).required(),
    address:joi.string().min(4).max(50).required(),
    mob_no:joi.string().min(10).max(12).required(),
    email:joi.string().min(10).max(50).required(),
})

const userValidate = async(req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({error: value.error.details[0]})
    }
    else{
        next()
    }
}

module.exports = {userValidate}
