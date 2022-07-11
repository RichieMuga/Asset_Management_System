const mongoose = require('mongoose')

const AssetDetailsSchema = new mongoose.Schema({

    asset_Name: {
        type: String,
        min: [2, 'This length is not accepted please try again'],
        required: [true, 'Kindly provide an asset name']
    },
    assetType: {
        type: String,
        enum: ['monitor', 'keyboard', 'mouse', 'projector', 'laptop', 'desktop', 'printer', 'tv'],
        required: [false, 'Kindly enter an assset type ']
    },
    tagNum: {
        type: String,
        required: [true, 'Kindly enter a tag number'],
        unique: true
    },
    warranty: {
        type: Boolean,
        default: false
    },
    assetSN: {
        type: String,
        required: [true, 'Please provide serial number'],
        unique: true
    },
    model: {
        type: String,
    },
    address: {
        type: String,
        required: [false, 'Please enter address']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    condition: {
        type: String,
        enum: ['Good', 'Bad', 'Excellent', 'New', 'Poor'],
        required: [true, 'Please enter condition of the asset']
    }
},
    { timestamps: true }
)


module.exports = mongoose.model('AssetDetails', AssetDetailsSchema)