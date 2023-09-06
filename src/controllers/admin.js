const path = require('path');

function dashboard(req, res) {
  res.sendFile(path.resolve(__dirname, '../views/admin/dashboard.html'));
}

module.exports = {
  dashboard,
};
