import  express from "express";
import {  delUser, getUser, getAllUser, updateUser } from "../controllers/User.js";
import { verifyToken } from "../utils/verifytoken.js";

const router = express.Router();

router.get("/checkauth", verifyToken,(req,res,next)=>{
    res.send("hello user are logged in")
} )

//UPDATE
router.put("/:id",updateUser)
// DELETE
router.delete("/:id",delUser)
// GET
router.get("/:id",getUser)
// GET ALL
router.get("/",getAllUser)

export default router