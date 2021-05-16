import cookie from "cookie";

export const cookieParser = (req) => {
  return cookie.parse(req ? req.headers.cookie || "" : "");
};
