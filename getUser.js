function getUser(id, callback) {
  setTimeout(function() {
    callback(`Non blocking call ${id}`);
  }, 3000);
}

module.exports = getUser;
