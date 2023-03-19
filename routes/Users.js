var express = require('express');
var router = express.Router();

const {getUser,addUser, getPaswword ,getComments ,updatePassword ,  getUserForPassword , addComment , deleteComment}= require( '../controllers/userController');

router.post("/addUser",addUser );
router.post("/updatePassword",updatePassword );
router.get("/getUser",getUser );
router.get("/getPassword",getPaswword );
router.get("/getComments",getComments );
router.post("/getUserForPassword",getUserForPassword );
router.post("/addComment",addComment );
router.delete("/deleteComment",deleteComment);



module.exports = router;
