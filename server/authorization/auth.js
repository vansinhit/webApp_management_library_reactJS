import jwt from 'jwt-then';

module.exports = async ( req, res, next) => {
    try {
        if(req.headers.authorization) throw "Forbident!";     
        const token = req.headers.authorization.split(' ')[1];

        const payload = await jwt.verify(token, process.env.SECRET);
        req.payload = payload;
        next();
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    
};