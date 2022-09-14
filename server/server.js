const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());


const Member = require('./models/Member');

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log("DB Connected")).catch((err) => console.error(err));

app.put('/upsert', async (req, res) => {

    const publickey = req.body.walletPublicKey;
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const uname = req.body.userName;

    Member.find({_id: uname}, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            if (data.length == 0) {
                const newMember = new Member({
                    _id: uname,
                    walletPublicKey: publickey,
                    firstName: fname,
                    lastName: lname,
                });

                try {
                    newMember.save();
                    res.send("inserted new member");
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    });
});

app.listen(4000, () => console.log("Server is running"));