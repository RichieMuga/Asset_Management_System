const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const { CustomAPIError, UnauthenticatedError, NotFoundError, BadRequestError, } = require('../../errors')
const User = require('../../model/user-credentials/userAccounts')
const { attachCookiesToRes } = require('../../utils')
require('dotenv').config()


const login = async (req, res) => {
  const { email, password } = req.body

  //if password or email or both havent been provided send bad request
  if (!email || !password) {
    throw new UnauthenticatedError('invalid credentials')
  }
  //parse through the database to find user email and email that is compatible
  //with the email's password if they are not then return to login page
  const user = await User.findOne({ email })

  if (!user) {
    throw new BadRequestError("email doesn't exist")
  }
  const passwordismatch = await user.comparePassword(password);
  if (!passwordismatch) {
    throw new BadRequestError('Invalid password')
  }
  // const usernameAndEmail = { username: user.username, Email: user.Email }
  // employeeId: user.employeeId
  //  company: user.company

  const tokenUser = { role: user.role, userId: user._id, name: user.name }

  attachCookiesToRes(res, tokenUser)
  // console.log(tokenUser);
  tokenUser.email = email

  res.status(StatusCodes.OK).json({ status: "success", user: tokenUser })
}


const createsignupuser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  if (!name || !email || !password) {
    throw new UnauthenticatedError("please provide appropriate credentials")
  }

  const userAlreadyHasAccount = await User.findOne({ email })
  if (userAlreadyHasAccount) {
    throw new BadRequestError('Email already in use')
  }
  //company and employeeId to add to the User.create
  const person = await User.create({ name, email, password })
  // const usernameAndEmail = { username, Email }
  // company and employeeId to add to the token user
  const tokenUser = { userId: person._id, name: person.name }


  attachCookiesToRes(res, tokenUser)
  tokenUser.email = email


  return res.status(StatusCodes.CREATED).json({ status: 'success', user: tokenUser })
}

const logout = async (req, res) => {
  res.cookie('cookieYaKwanza', 'logged out', { expires: new Date(Date.now()), httpOnly: true, })
  res.status(StatusCodes.ACCEPTED).json({ msg: 'user logged out' })
}

const updateUser = async (req, res) => {
  const { name, email, role } = req.body
  const { userId } = req.user
  //check and make sure re.body is not empty
  if (!name || !email || !role) {
    throw new BadRequestError('Please enter appropriate values')
  }

  const findUser = await User.findOneAndUpdate({ _id: userId }, { role, email, name }, { new: true, upsert: true })

  // findUser.role = role
  // findUser.name = name
  // findUser.email = email

  // const saveUser = await findUser.save()

  // attachCookiesToRes(res, tokenUser)

  res.status(StatusCodes.OK).json({ findUser })


}




module.exports = { createsignupuser, login, logout, updateUser }