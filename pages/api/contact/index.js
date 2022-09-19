import { db } from "../../../database";
import { Contact } from "../../../models";





export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            return createMessage(req, res);

        case "GET":
            return getMessage(req, res);

        default:
            return res.status(400).json({
                message: "Bad request",
            });
    }
}

const getMessage = async (req, res) => {
    try {

        await db.connect();
        const messages = await Contact.find().lean();
        await db.disconnect();
        return res.status(200).json({
            ok: false,
            messages
        });




    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: 'Revisar la consola del servidor' });
    }
}

const createMessage = async (req, res) => {


    try {
        const { name, phone, email, message } = req.body;


        /**
         * Validar Campos
         */
        const errorArray = [];
        if (!phone) errorArray.push("Campo phone es requerido");
        if (!name) errorArray.push("Campo name es requerido");
        if (!email) errorArray.push("Campo email es requerido");
        if (!message) errorArray.push("Campo message es requerido");


        if (errorArray.length > 0) {
            //  throw new Error(errorArray);

            return res.status(400).json({
                ok: false,
                error: errorArray,
            });
        }


        const newContact = new Contact({ name, phone, email, message });

        await db.connect();
        await newContact.save()
        await db.disconnect();


        return res.status(201).json({
            ok: true,
            message: newContact,
        });

    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(500).json({ message: 'Revisar la consola del servidor' });
    }

}