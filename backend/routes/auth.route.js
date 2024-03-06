import express from "express";
import {
  login,
  loginParent,
  logout,
  signup,
  signupParent,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/parentSignup", signupParent);
router.post("/parentLogin", loginParent);

export default router;
