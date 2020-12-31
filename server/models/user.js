  
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   name: {
       type : String,
       require: 'pleas enter name'
   },
   email: {
       type: String,
       required: 'pleas enter email'
   },
   password: {
       type: String,
       required: 'plear enter password'
   }
},{
    timestamps: true,
})

var userSchema1 = mongoose.model('User', userSchema);

export default userSchema1;