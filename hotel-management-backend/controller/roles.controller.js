const Role = require('../model/roles.model')
const QueryGetter = require('../utils/query-generator')

exports.getAllRoles = async(req,res) =>{
    let allRoles = await Role.getRoles()
    res.json(allRoles)
}

exports.addRole = async(req, res) =>{ 
    let {name} = req.body
    let role =  new Role(name) 
    role = await role.save()
    
    res.status(200).json({msg:'Role created'})
}

exports.updateRole = async(req, res) =>{
    await Role.update(req.body)
    res.status(201).json({msg:'Update'})
}

