import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (UserId, res) => {
  const token = jwt.sign(
    { UserId },
    process.env.JWT_SECRET || "A1tXbJE9rtBGAED6Uh3RkLyNg3ttcPcWC/nalyrMuzs=",
    {
      expiresIn: "15d",
    }
  );

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //milli-second
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", //CSRF attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development", //cookie only works in https
  });
};

export default generateTokenAndSetCookie;
