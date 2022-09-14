const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    walletPublicKey: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    attendance: [
        {
            Date: String,
            MeetingType: String,
        },
    ],
});

const Member = mongoose.model("members", MemberSchema);
module.exports = Member;