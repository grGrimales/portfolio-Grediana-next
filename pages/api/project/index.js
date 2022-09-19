import { db } from "../../../database";
import { Project } from "../../../models";


export default function handler(req, res) {
    switch (req.method) {


        case "GET":
            return getProjects(req, res);



        default:
            return res.status(400).json({
                message: "Bad request",
            });
    }
}


const getProjects = async (req, res) => {

    try {
        await db.connect();
        const projects = await Project.find().lean();
        await db.disconnect();

        return res.status(200).json({
            ok: true,
            projects
        });
    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: 'Revisar la consola del servidor' });

    }

}