const express=require("express");
const router=express.Router();

const Employee=require("../models/Employee");

// create Employess

router.post("/",async(req,res) =>{

    try{
        const employees=await Employee.create(req.body);
        res.body(201).json(employees);
    }

    catch(error){
        res.status(400).json({message: error.message});
    }
});

//Read All Employess

router.get("/" ,async (req,res) =>{

    try{
        const employees=await Employee.find();
        res.json(employees);
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
});

//Update Employess

router.put("/:id",async (req,res) =>{

    try{
        const employee=await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true,runValidators:true}
        );

        if(!employee){
            return res.status(404).json({meassage:"Employee not Found"});
        }

        res.json(employee);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});


// Delete Employee 

router.delete("/:id", async(req,res) => {

    try{
        const employee= await Employee.findByIdAndDelete(req.params.id);

        if(!employee){
            res.status(400).json({meassage:"Employee not Found"});
        }

        res.json({meassage : "Employess deleted Successfully"});
    }
    catch(error){
        res.status(400).json({message:error.meassage});
    }
});

module.exports=router;