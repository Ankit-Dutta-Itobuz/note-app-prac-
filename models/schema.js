import mongoose from 'mongoose'


const noteSchema = mongoose.Schema({
    title : {type : String, required : true}, 
    text : {type : String, required : true},
    })

const noteData = mongoose.model('noteData',noteSchema);
export default noteData;