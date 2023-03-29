const jwt = require("jsonwebtoken");
module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies["jwt-token"], process.env.SecretKeyOne, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      console.log(payload);
      req.userId = payload.id;
      next();
    }
  });
};
