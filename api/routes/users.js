import  express from "express";
import {  delUser, getUser, getAllUser, updateUser } from "../controllers/User.js";
import { verifyToken, verifyuser, verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();

router.get("/checkauth", verifyToken,(req,res,next)=>{
    res.send("hello user are logged in")
} )
router.get("/checkuser/:id", verifyuser,(req,res,next)=>{
    res.send("hello user are logged in and auth")
} )
router.get("/checkuser/:id", verifyAdmin,(req,res,next)=>{
    res.send("hello user are logged in and auth")
} )

//UPDATE
router.put("/:id",verifyuser,updateUser)
// DELETE
router.delete("/:id",verifyuser,delUser)
// GET
router.get("/:id",verifyuser,getUser)
// GET ALL
router.get("/",verifyAdmin,getAllUser)

export default router