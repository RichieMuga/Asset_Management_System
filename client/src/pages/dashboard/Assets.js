import React from 'react'
import DisplayAsset from '../../components/assetsPage/displayAsset'
import CreateAssetBtn from '../../components/assetsPage/CreateAssetBtn'
import SearchComponent from '../../components/assetsPage/SearchComponent'

const Assets = () => {
    return (
        <div className='fullWidth'>
            <h1 className='heading-dashboard'>Assets</h1>
            <CreateAssetBtn />
            <SearchComponent />
            <DisplayAsset />
        </div>
    )
}

export default Assets