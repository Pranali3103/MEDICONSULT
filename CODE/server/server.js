const express= require('express')
const cors=require ('cors')
const bodyParser=require('body-parser')
const app = express();
const {Register,connectToDatabase} =require('./db.js')

app.use(cors());
app.use(bodyParser.json());
connectToDatabase();
app.post('/signup', async (req, res) => {
    try {
        // Create a new User instance and set the properties
        const register = new Register({
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        });
        const savedregister = await register.save();

        console.log(savedregister);

        res.status(201).json(savedregister);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});




app.listen(5000, () => {
    console.log('Server running');
});


