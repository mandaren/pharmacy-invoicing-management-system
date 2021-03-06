import * as drug from '../../models/drug'

export const findOne = async(req, res)=> {
    const info = await drug.findOne()
    res.send(info)
}

export const findAll = async(req, res)=> {
    let sql = {
        offset: (req.query.page - 1) * 10,
        limit : 10
    }

    if (req.query.name) {
        sql.where = {
            name: req.query.name
        }
    }

    const info = await drug.findAndCountAll(sql)
    res.send(info)
}

export const create = async(req, res)=> {
    const info = await drug.create(req.body)
    res.send(info)
}

export const update = async(req, res)=> {
    const id = req.body.id
    const updateInfo = {
        [req.body.key]: req.body.value
    }
    const info = await drug.update(updateInfo, id)
    res.send(info)
}

export const del = async(req, res)=> {
    const id = req.body.id
    const info = await drug.del(id)
    res.status(200).send(true)
}