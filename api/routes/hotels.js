import  express from "express";
import { createHotel, delHotel, getHotels, getHotel, updateHotel } from "../controllers/hotel.js";
import {  verifyAdmin } from "../utils/verifytoken.js";
import Hotel from "../models/Hotel.js"
const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createHotel);
//UPDATE
router.put("/:id",verifyAdmin,updateHotel)
// DELETE
router.delete("/:id",verifyAdmin,delHotel)
// GET
router.get("/:id",getHotel)
// GET ALL
router.get("/",getHotels)

export default router