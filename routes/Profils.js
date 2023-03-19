var express = require('express');
var router = express.Router();

const {addProfil ,getProfilByID,getAllProfil,getProfilBySpecialty,updateRating,addComment,updateComment,deleteComment,updateLike,updateDisLike,}= require( '../controllers/ProfilController');

router.post("/addProfil",addProfil );
router.get("/getProfilByID",getProfilByID );
router.get("/getAllProfil",getAllProfil );
router.get("/getProfilBySpecialty",getProfilBySpecialty );
router.post("/updateRating",updateRating );
router.post("/addComment",addComment);
router.post("/updateComment",updateComment);
router.delete("/deleteComment",deleteComment);
router.post("/updateLike",updateLike);
router.post("/updateDisLike",updateDisLike);

module.exports = router;
