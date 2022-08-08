const { StatusCodes } = require('http-status-codes')
const CustomError = require('../../errors')
const AssetDetails = require('../../model/asset-hosting/asset-details')
const User = require('../../model/user-credentials/userAccounts')
const utils = require('../../utils')
require('dotenv').config()


const getAllAssets = async (req, res) => {
    req.body.user = req.user.userId;
    // console.log(req.body.user);
    const { sort, Warranty, search } = req.query
    const reqQueryObject = {
        user: req.user.userId,
    }
    //
    // if (Warranty) {
    //     reqQueryObject.Warranty = Warranty === 'true' ? true : false
    // }
    // //sort
    // let result = AssetDetails.find(reqQueryObject)
    // if (sort) {
    //     const sortList = sort.split(',').join(' ')
    //     result = result.sort(sortList)
    // }
    if (search) {
        reqQueryObject.asset_Name = { $regex: search, $options: 'i' }
    }
    let result = AssetDetails.find(reqQueryObject)

    if (sort === 'latest') {
        result = result.sort('-createdAt')
    }
    if (sort === 'oldest') {
        result = result.sort('createdAt')
    }
    if (sort === 'a-z') {
        result = result.sort('asset_Name')
    }
    if (sort === 'z-a') {
        result = result.sort('-asset_Name')
    }


    //pagination
    const limit = Number(req.query.limit) || 9
    const page = Number(req.query.page) || 1
    const skip = Number(page - 1) * limit

    result = result.skip(skip).limit(limit)

    const assetResult = await result

    const totalAssets = await AssetDetails.countDocuments(reqQueryObject)
    const numOfPages = Math.ceil(totalAssets / limit)

    //to make sure the assets of the same one company appear
    res.status(StatusCodes.OK).json({ assetResult, totalAssets, numOfPages })

}
const createAsset = async (req, res) => {
    req.body.user = req.user.userId;
    const { body: { asset_Name, tagNum, assetSN, model, address, warranty, assetType, condition, user }, user: { userId } } = req
    if (!asset_Name || !tagNum || !assetSN || !address || !model || !assetType || !condition) {
        throw new CustomError.UnauthenticatedError('please provide appropriate credentials to streamline refrencing in future')
    }
    // another way for doing this
    // user = userId
    // console.log(req.body)
    // const asset = await AssetDetails.create(req.body)
    const asset = await AssetDetails.create({ asset_Name, tagNum, assetSN, model, address, warranty, assetType, condition, user: userId })
    res.status(StatusCodes.CREATED).json({ asset })
}
const getSingleAssets = async (req, res) => {
    req.body.user = req.user.userId;
    const { id: assetId } = req.params
    const asset = await AssetDetails.findOne({ _id: assetId })
    if (!asset) {
        throw new CustomError.BadRequestError(`Could not find asset with ${assetId}`)
    }
    res.status(StatusCodes.OK).json({ asset })
    // res.send('get single asset')
}
const updateAsset = async (req, res) => {
    req.body.user = req.user.userId;
    const { user: { userId }, params: { id: assetId }, body: { AssetName, TagNumber, AssetSn, EmployeeNumber, Model, Address, Warranty, Type } } = req
    if (AssetName === '' || TagNumber === '' || AssetSn === '' || EmployeeNumber === '' || Address === '') {
        throw new CustomError.BadRequestError('Cannot leave fields as blank')
    }
    const asset = await AssetDetails.findByIdAndUpdate({ _id: assetId, user: userId }, { AssetName, TagNumber, AssetSn, EmployeeNumber, Model, Address, Warranty, Type }, { runValidators: true, new: true })
    res.status(StatusCodes.OK).json({ asset })
}
const deleteAssets = async (req, res) => {
    req.body.user = req.user.userId;
    const { user: { userId }, params: { id: assetId } } = req
    const asset = await AssetDetails.findOneAndRemove({ _id: assetId, user: userId })
    if (!asset) {
        throw new CustomError.BadRequestError('Something went wrong, try again later')
    }
    res.status(StatusCodes.OK).json({ asset })
}
// const editAsset = async (req, res) => {
//     res.send('edit asset')
// }

module.exports = { getAllAssets, getSingleAssets, createAsset, updateAsset, deleteAssets }