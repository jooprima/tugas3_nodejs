//siswa controller

//import siswa model
Siswa = require('./siswaModel');

//handle index action
exports.index = function(req, res) {
  Siswa.get(function(err, siswa) {
    if (err) {
      res,
      json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Data Siswa retrieved successfully",
      data: siswa
    });
  });
};

//handle create siswa actions
exports.new = function(req, res) {
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggallahir = req.body.tanggallahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;

  //save siswa and check for error
  siswa.save(function(err) {
    // if (err)
    // res.json(err);

    res.json({
      message: "New Data Siswa created",
      data: siswa
    });
  });
};

//handle view siswa info
exports.view = function(req, res) {
  Siswa.findById(req.params.siswa_id, function(err, siswa) {
    if (err)
      res.send(err);
    res.json({
      message: 'Data Siswa loading...',
      data: siswa
    });
  });
};

//handle update siswa Info
exports.update = function(req, res) {
  Siswa.findById(req.params.siswa_id, function(err, siswa) {
    if (err)
      res.send(err);
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggallahir = req.body.tanggallahir;
    siswa.jeniskelamin = req.body.jeniskelamin;
    siswa.hobi = req.body.hobi;

    //save data siswa and check for the error
    siswa.save(function(err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Data Siswa Updated',
        data: siswa
      });
    });
  });
};

//handle delete data siswa
exports.delete = function(req, res) {
  Siswa.remove({
    _id: req.params.siswa_id
  }, function(err, siswa) {
    if (err)
      res.send(err);
    res.json({
      status: 'success',
      message: 'Data siswa deleted'
    });
  });
};