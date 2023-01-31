const { query } = require("../models/user");
const User = require("../models/user");

module.exports = async function basicAuth(req, res, next) {
  const unAuthoriz = () => res.status(401).json({ error: "unAuthorized" });
  const authoriz = req.headers.authorization;
  if (!authoriz) {
    return unAuthoriz();
  }
  const part = authoriz.split(" ");
  if (part.length !== 2) {
    return unAuthoriz();
  }
  const [type, payload] = part;
  if (type !== "Basic") {
    return unAuthoriz();
  }
  let creds = "";
  try {
    creds = Buffer.from(payload, "base64").toString("utf-8");
  } catch (err) {
    return unAuthoriz();
  }
  const creadsPart = creds.split(":");
  if (creadsPart.length !== 2) {
    return unAuthoriz();
  }
  // const user = await (await User.query()).find(User, 'userName');
  const [user, password] = creadsPart;
  const foundUser = await User.query().where("userName", user).first();
  if (!foundUser) {
    return unAuthoriz();
  }if(foundUser.password === password){
    return next()
  }
  return unAuthoriz();
};
