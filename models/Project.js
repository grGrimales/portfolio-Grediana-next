import mongoose, { Schema, model } from 'mongoose';

const projectSchema = new Schema({


    title: { type: String, required: true },
    images: { type: [String], required: true },
    category: { type: String, required: true },

    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    linkDemo: { type: String, required: true },
    linkGithub: { type: String, required: true },

}, {
    timestamps: true
});

const Project = mongoose.models.Project || model('Project', projectSchema);

export default Project;

