const carModel = require('../models/cars.model');
const carController = {};

carController.getCars = async (req, res) => {
    const cars = await carModel.find();
    res.json(cars);
};

carController.addCar = async (req, res) => {
    const car = new carModel(req.body);
    await car.save();
    res.json({ 'status': 'Auto guardado correctamente'});
};

carController.deleteCar = async (req, res) => {
    await carModel.findByIdAndDelete(req.params.id);
    res.json({ status: 'Auto eliminado!'});
};
 
module.exports = carController;