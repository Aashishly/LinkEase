const Link = require('../models/link');
const shortid = require('shortid');

const shortenLink = async (req, res) => {
    try {
        const { longLink } = req.body;
        const shortCode = generateShortCode();

        const link = new Link({
            longLink,
            shortCode,
        });

        await link.save();

        return res.status(200).json({shortCode});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Internal Server Error!'});
    }
};

const redirecttolink = async (req, res) => {
    try {
        const { shortCode } = req.params;
        const link = await Link.findOne({shortCode});

        if(!link){
          return res.status(400).json({error: 'Link not found!'});
        }

        return res.redirect(link.longLink);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Internal Server Error!'});
    }
};


const generateShortCode = () => {
    
}


module.exports = {
    shortenLink,
    redirecttolink,
}