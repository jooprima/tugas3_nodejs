//initialize express Router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
  res.json({
    status: 'API its working',
    message: 'welcome to tugasCRUD crafted'
  });
});

//import siswaController
var siswaController = require('./siswaController');

//siswa apiRoutes
router.route('/siswa')
  .get(siswaController.index)
  .post(siswaController.new);

router.route('/siswa/:siswa_id')
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);

//export API
module.exports = router;