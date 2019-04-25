const Projects = require('./projects-model');

module.exports ={
    getProj: async (req, res) => {
        try {
            const id =  await req.params.id;
            const resourceArr = await Projects.get(id);
            console.log(" resource Array :" , resourceArr);
            res.status(200).json(resourceArr);
        } catch (error) {
            console.log(`error in get method ${error}`);
            res.status(500).json({message: `error getting resources: ${error}`});
        }
    },
    getProjById: async (req, res) => {
        try {
            // const {id} =  await req.params.id;
            const resourceArr = await Projects.getById(req.params.id);
            console.log(" resource Array :" , resourceArr);
            res.status(200).json(resourceArr);
        } catch (error) {
            console.log(`error in get method ${error}`);
            res.status(500).json({message: `error getting resources: ${error}`});
        }
    },
    addProj: async (req, res) => {
        try {
            const newResource = await Projects.insert(req.body)
            res.status(200).json(newResource)
        } catch (error) {
            res.status(500).json(`error creating resource ${error}`)
        }
    },
    updateProj: async (req, res) => {
        try {
            const project = await Projects.updateProject(req.params.id, req.body)
            console.log(project);
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({error: 'Project not found'})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}
