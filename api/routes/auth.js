import  express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("hello")
})
router.get('/reg',(req,res)=>{
    res.send("hello reg")
})

export default router