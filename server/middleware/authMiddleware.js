const authMiddleware = (req, res, next) => {
    const isAuthenticated = true;


    if(isAuthenticated){


        next();
    } else{
        res.status(400).json({success: false, error: 'Unathorized'});
    }
};


module.exports = authMiddleware;