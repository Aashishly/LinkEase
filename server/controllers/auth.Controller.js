const User = require('../models/user');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({error: 'User already exist!'});
        };

        const user = new User({
            email,
            username,
            password,
        });

        await user.save();
        res.status(200).json({message: 'Registered Successfully!'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server error'});
    }
};

const login = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.findOne({ email });

        if(!User){
            return res.status(400).json({error: 'User not found'})
        }

        // login logic
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server error'});
    }
}