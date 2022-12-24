import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";

const tokenDecode = (req) => {
  try {
    //console.log("req", req.headers["Authorization"])
    const bearerHeader = req.headers["authorization"];
    console.log("berrr", bearerHeader);
    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    }
    return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  
  const tokenDecoded = tokenDecode(req);
  console.log("token decoding", tokenDecoded);
  if (!tokenDecoded) return responseHandler.unauthorize(res);

  const user = await userModel.findById(tokenDecoded.data);
  // return 401
  if (!user) return responseHandler.unauthorize(res);

  req.user = user;
  console.log("user", req.user);
  next();
};

export default { auth, tokenDecode };
