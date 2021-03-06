import {drug} from '../index'

export const findOne = async()=> {
    return await drug.findOne()
}

export const create = async(info)=> {
    return await drug.create(info)
}

export const update = async(info, id)=> {
    return await drug.update(info, {
        where: {
            id: id
        }
    })
}

export const del = async(id)=> {
    return await drug.destroy({
        where: {
            id: id
        }
    })
}

export const findAndCountAll = async(info)=> {
    return await drug.findAndCountAll(info)
}