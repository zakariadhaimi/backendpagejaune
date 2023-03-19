var express = require('express');
var router = express.Router();

const { addDemande ,getAllDemande, updateStatus ,getDemandes,deleteDemande}= require( '../controllers/DemandeController');

router.post("/addDemande",addDemande );
router.post("/updateStatus",updateStatus );
router.get("/getAllDemande",getAllDemande );
router.get("/getDemandes",getDemandes );
router.delete("/deleteDemande" , deleteDemande)

module.exports = router;
