const Categorie = require("../models/Categorie");


const getAllCategories = async(req, res) =>{
    try{
        const catigory = await Categorie.findAll();
        res.json(catigory)
    } catch(error){
        res.status(500).json({ error: error.message})
    }
}

const getCategorieById = async(req, res) =>{
    const catigoryID = req.params.catigoryID;
    try{
        const catigory = await Categorie.findByPk(catigoryID);
        if(catigory){
            res.json(catigory)
        }
        else{
            res.status(404).json({message:"catigory not found"})
        }
    } catch(error){
        res.status(500).json({ error: error.message})
    }
}

const createCategorie = async(req, res) =>{
    const {nom} = req.body;
    try{
        const newCategorie = await Categorie.create({nom});
        res.status(201).json(newCategorie)
    }catch(error){
        res.status(500).json({ error: error.message})
    }
}

const updateCategorie = async(req, res) =>{
    const catigoryID = req.params.catigoryID;
    const {nom} = req.body;
    try{
        const catigory = await Categorie.findByPk(catigoryID);
        if(catigory){
            await catigory.update({nom});
            res.json(catigory)
        }else{
            res.status(404).json({message: "catigory not found"})
        }
    }catch(error){
        res.status(500).json({ error: error.message})
    }
}

const deleteCategorie = async(req, res) =>{
    const catigoryID = req.params.catigoryID;
    try{
        const catigory = await Categorie.findByPk(catigoryID);
        if(catigory){
            await catigory.destroy();
            res.json({message:"catigory deleted"})
        }else{
            res.status(404).json({message: "catigory not found"})
        }
    }catch(error){
        res.status(500).json({ error: error.message})
    }
};
module.exports = {getAllCategories,getCategorieById,createCategorie,updateCategorie,deleteCategorie}