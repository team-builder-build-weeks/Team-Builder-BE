const Roles = require('./roles-model')

module.exports = {
    addRole:  async (req, res) => {
        try {
            const newRole = await Roles.addRole(req.body)
            res.status(200).json(newRole);
        } catch (error) {
            res.status(500).json(`error creating role ${error}`)
        }
    },
    getRolesByProject: async (req, res) => {
        try {
            // const {id} =  await req.params.id;
            const rolesArr = await Roles.getByProject(req.params.id);
            console.log(" Roles Array :" , rolesArr);
            res.status(200).json(rolesArr);
        } catch (error) {
            console.log(`error in get method ${error}`);
            res.status(500).json({message: `error getting resources: ${error}`});
        }
    },
    updateRole: async (req, res) => {
        try {
            const role = await Roles.updateRole(req.params.id, req.body)
            console.log(role);
            if (role) {
                res.status(200).json(role)
            } else {
                res.status(404).json({error: 'Role not found'})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
    }
}


