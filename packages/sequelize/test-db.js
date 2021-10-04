require('./src/db/migrations/db-init')

const { user } = require('./src/db')

user.createUser({ name: 'juseong', email: 'khackskjs@naver.com' })
