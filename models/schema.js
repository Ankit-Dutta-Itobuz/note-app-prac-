import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title:{
    type:String,
    
    },
    text:{
        type:String,
    }
})
   

const NoteData = mongoose.model('NoteData',noteSchema);
export default NoteData;