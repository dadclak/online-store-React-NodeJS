const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../errors/ApiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
                // creating a unique name for the image
            let fileName = uuid.v4() + '.jpg'
                // moving an image to a static folder
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({ name, price, brandId, typeId, img: fileName })

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id,
                    })
                })
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const { typeId, brandId, limit = 9, page = 1 } = req.query
        let devices;
        let offset = page * limit - limit

        if (!typeId && !brandId) {
            devices = await Device.findAndCountAll({ limit, offset })
        }
        if (typeId && !brandId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (!typeId && brandId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
        }
        if (typeId && brandId) {
            devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset })
        }

        return res.json(devices)
    }

    async getOne(req, res) {
        const { id } = req.params;
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo, as: 'info' }],
        }, )
        return res.json(device)
    }
}

module.exports = new DeviceController()