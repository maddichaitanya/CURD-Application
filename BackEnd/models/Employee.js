const mongoose=require("mongoose");

const employeesSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },

    department:{
        type:String,
        require:true
    },

    salary:{
        type:Number,
        require:true
    }
});

module.exports=mongoose.model("Employee",employeesSchema);