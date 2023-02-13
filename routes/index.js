const { Router } = require('express');
const router = Router();
const controllers = require('../controllers')

router.post('/plants', controllers.createPlant)
router.get('/plants', controllers.getAllPlants)
router.get('/plants/:id', controllers.getPlantById)

module.exports = router;