'use strict';

module.exports = function (app) {
    var disk = require('../controllers/diskController');

    app.route('/api/albums')
        .get(disk.getDisks)
        .post(disk.addDisk)
        .delete(disk.deleteDisks);

    app.route('/api/albums/:albumId')
        .get(disk.getDisk)
        .put(disk.editDisk)
        .delete(disk.deleteDisk);
};
