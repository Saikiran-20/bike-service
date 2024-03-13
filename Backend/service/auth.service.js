var jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  // const token = req.headers["authorization"].split(" ")[1];
  const token = req.cookies.jwt;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};
module.exports = {
  authorization,
};
