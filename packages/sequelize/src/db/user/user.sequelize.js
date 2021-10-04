module.exports = class User {
  constructor(user) {
    console.log('USER constructor', user)
    this._user = user
  }

  get dbUser() { return this._user }

  createUser({ email, name } = {}) {
    return this.dbUser.create({
      email,
      name,
      studyDateCount: 1,
    })
  }
}
