const express = require("express");
const router = express.Router();
const {getProjects, postProjects, putProjects, delProjects} = require('../controllers/controller')

router.route('/').get(getProjects).post(postProjects);
// router.route('/').get((req,res)=>{
//     res.status(200).json({message: "get req"})
// } );
// router.route('/').post(postProjects)
router.route('/:id').put(putProjects)
router.route('/:id').delete(delProjects)

module.exports = router;