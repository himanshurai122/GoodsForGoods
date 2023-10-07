import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Himanshu',
    email: 'himanshu@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Shreyash',
    email: 'shreyash@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mohit',
    email: 'mohit@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users

