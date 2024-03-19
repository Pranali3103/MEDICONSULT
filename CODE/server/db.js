const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const RegisterSchema = new Schema({
    fullname: {
        type: String,
        require: true,
    },
   
    email: {
        type: String,
        require: true,
       unique:true
    },
    phone: {
        type: Number,
        require: true,
       unique: true,

    },
    
    password: {
        type: String,
        require: true,
    },
  
});


const NotDoctorSchema = new Schema({
    fullname: {
        type: String,
        require: true,
    },
   
    email: {
        type: String,
        require: true,
       unique:true
    },
    phone: {
        type: Number,
        require: true,
       unique: true,

    },
    
    password: {
        type: String,
        require: true,
    },
  
});

module.exports = {
    Register: mongoose.model('Register', RegisterSchema),
    NotDoctor:mongoose.model('NotDoctor', NotDoctorSchema) ,

    connectToDatabase: async () => {
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/authentication', {

            });
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    },
};

