const mongoose = require('mongoose');

// Define a schema for the Canvas divisions
const canvasDivisionSchema = new mongoose.Schema({
    stickyCount: Number,
    stickyColor: String,
    data: [String], // Array of strings
});

// Define a schema for the Project
const projectSchema = new mongoose.Schema({
    owner_id: String,
    project_name: String,
    project_description: String,
    members: [{}], // Array of Objects
    canvases: {
        aeiou: {
            environment: canvasDivisionSchema,
            interaction: canvasDivisionSchema,
            objects: canvasDivisionSchema,
            users: canvasDivisionSchema,
            activity: canvasDivisionSchema,
        },
        empathy: canvasDivisionSchema,
        ideation: canvasDivisionSchema,
        productdevelopment: canvasDivisionSchema,
        businessmodel: canvasDivisionSchema,
        lnm: canvasDivisionSchema,
    },
});

// Create a model using the projectSchema
// const Project = mongoose.model('Project', projectSchema);
const ProjectModel = mongoose.model('projects', projectSchema);
module.exports = ProjectModel;
