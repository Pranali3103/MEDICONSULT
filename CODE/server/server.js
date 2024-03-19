const express= require('express')
const cors=require ('cors')
const bodyParser=require('body-parser')
const app = express();
const {Register,NotDoctor,connectToDatabase} =require('./db.js')
const bcrypt=require('bcrypt')

app.use(cors());
app.use(bodyParser.json());
connectToDatabase();
app.post('/signup', async (req, res) => {
    try {
        const hashedpaswword=await bcrypt.hash(req.body.password,8)
        

        const register = new Register({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedpaswword
        });
        const savedregister = await register.save();

        console.log(savedregister);

        res.status(201).json(savedregister);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.post('/notsignup', async (req, res) => {
    try {
        const hashedpaswword=await bcrypt.hash(req.body.password,8)
        

        const notdoctorregister = new NotDoctor({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedpaswword
        });
        const notdoctorregisters = await notdoctorregister.save();

        console.log(notdoctorregisters);

        res.status(201).json(notdoctorregisters);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});






app.listen(5000, () => {
    console.log('Server running');
});


