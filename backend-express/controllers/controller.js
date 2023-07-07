const projectsModel = require('../models/projectsModel')
const asyncHandler = require('express-async-handler');

const getProjects = asyncHandler(async(req,res)=>{
    const projectsList = await projectsModel.find();
    res.status(200).json(projectsList)
});

const postProjects = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {project_name, project_ID, project_description, sills_required, qualification} = req.body;
    if (!project_name || !project_ID || !project_description){
        res.status(400)
        throw new Error("All fiels required")
    }
    const createProjects = await projectsModel.create({project_name, project_ID, project_description, sills_required, qualification});
    res.status(201).json(createProjects);

})

// const postProjects = asyncHandler(async(req,res)=>{
//     try{
//         const create = await projectsModel.create(req.body)
//         if(create){
//             res.send("created")
//         }else{
//             res.send("error")
//         }
//     }catch(err){
//         res.send(err)
//     }
// })

const putProjects = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `put req ${req.params.id}`})
})

const delProjects = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `del req ${req.params.id}`})
})

module.exports = {getProjects, postProjects, putProjects, delProjects}