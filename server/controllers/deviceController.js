const { Device } = require('../models/models');
const ApiError = require('../errors/ApiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
                // creating a unique name for the image
            let fileName = uuid.v4() + '.jpg'
                // moving an image to a static folder
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({ name, price, brandId, typeId, img: fileName })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {}

    async getOne(req, res) {}
}

module.exports = new DeviceController()