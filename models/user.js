const mongoose=require("mongoose");
const schema =mongoose.Schema;


const userSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    profile_photo:{type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU09gfVRLXhQ_XvjIzgE4nafI2sladWvbVg&s"
    },
    category:{
        type:String,
        default:"voyageur"
    }
  });


const User = mongoose.model('User', userSchema);
module.exports=User;