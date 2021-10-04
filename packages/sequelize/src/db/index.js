const db = require('./models')

const User = require('./user')

const user = new User(db.User)

module.exports = {
  user,
}
