const mongoose=require('mongoose');

const toysSchema = new mongoose.Schema({
    name: {type: String, required: true},
    Aboutoy: {type:String, required:true},
    img: {type:String, required: true}
});

const toylist = mongoose.model('toy', toysSchema);

module.exports=toylist;