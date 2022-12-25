import  express from "express";
import {  delRoom, getRoom, getRooms, updateRoom,createRoom} from "../controllers/Room.js";
import {verifyAdmin} from "../utils/verifytoken.js"
const router = express.Router();


//CREATE
router.post("/:hotelid",verifyAdmin,createRoom);
//UPDATE
router.put("/:id",verifyAdmin,updateRoom)
// DELETE
router.delete("/:id/:hotelid",verifyAdmin,delRoom)
// GET
router.get("/:id",getRoom)
// GET ALL
router.get("/",getRooms)
export default router