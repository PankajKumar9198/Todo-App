// import the model 
const Todo= require("../models/Todo");

//define route handler 

exports.getTodo = async(req,res) => {
    try {
       // fetch all todo items from databse
       const todos = await Todo.find({});

       // response
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"Entire todo data is fetched",
       });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}


exports.getTodoById = async(req,res) => {
    try {
       // extract todo item basis on id
       const id = req.params.id;
       const todo = await Todo.findById( {_id: id} )

       //data forgiven id not found
       if(!todo) {
        return res.status(404).json({
            success:false,
            message:"NO data found with given id",
        })
       }
       // data for given if found
       res.status(200).json( {
        success:true,
        data:todo,
        message: `Todo ${id} data successfully fatched`,
       })
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}