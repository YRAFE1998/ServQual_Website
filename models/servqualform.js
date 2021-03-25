const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const servqualschema = new Schema({
    name:{
        type: String,
        required:true,
    },
    emailaddress:{
        type: String
    },
    company:{
        type:String
    },
    phone:{
        type: String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


var servqualformschema = mongoose.model('Quotation_Request',servqualschema);

module.exports = servqualformschema;
