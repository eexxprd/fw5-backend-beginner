const vehicles = require('express').Router();

const { getVehicles, getPopulars, getVehiclesCategory, getVehicle, postVehicle, patchVehicle, deleteVehicle } = require('../controllers/vehicles');
const { verifyAdmin } = require('../helpers/auth');

vehicles.get('/', getVehicles);
vehicles.post('/', verifyAdmin, postVehicle);
vehicles.get('/category', getVehiclesCategory);
vehicles.get('/:id', getVehicle);
vehicles.patch('/:id', verifyAdmin, patchVehicle);
vehicles.delete('/:id', verifyAdmin, deleteVehicle);
vehicles.get('/p/populars', getPopulars);

module.exports = vehicles;