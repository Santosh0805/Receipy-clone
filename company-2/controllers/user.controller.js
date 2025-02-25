const User= require('../models/user.model');

const register = async (req, res) => {
    const {name , email, password } = req.body;
    try{
        await User.create({name, email, password});
        res.status(201).json({message: 'User created successfully'});
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message || 'Something went wrong' });
    }
    

}
const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email, password});
        if (user) {
            res.status (200).json({message : 'User logged in successfully'});
        }else{
            res.status(500).json({message :"Password is not Match"});
        }
    }
    catch (error){
        res.status (401).json({message: 'invalid credientials'});
  
    }
}


module.exports = {register , login};