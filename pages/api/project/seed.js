import { db, seed } from "../../../database";
import { Project } from "../../../models";

export default async function handler(req, res) {
    if (process.env.NODE_ENV === "production") {
        return res.status(401).json({ message: "No tiene acceso a este API" });
    }


    try {

        await db.connect();


        await Project.deleteMany();
        await Project.insertMany(seed.initialData.projects);


        await db.disconnect();

        res.status(200).json({ message: "Proceso realizado correctamente" });

    } catch (error) {

        await db.disconnect();
        console.log(error)

        res.json({ message: "Ha ocurrido un error, revise la consola del servidor" });

    }


}
