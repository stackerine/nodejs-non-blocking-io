function getUserSync(id, callback) {
  var dt = new Date();
  while (new Date() - dt <= 3000) {
    /* Do nothing */
  }

  callback(`Blocking call ${id}`);
}

module.exports = getUserSync;
