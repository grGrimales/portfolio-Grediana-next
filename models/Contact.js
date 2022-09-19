import mongoose, { Schema, model } from 'mongoose';


const contactSchema = new Schema({


    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true},
    message: { type: String, required: true },

},{
    timestamps: true
});

const Contact  = mongoose.models.Contact ||  model('Contact', contactSchema);

export default Contact;

