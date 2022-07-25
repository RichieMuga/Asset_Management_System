import React from 'react'
import DisplayAsset from '../../components/assetsPage/displayAsset'
import SearchComponent from '../../components/assetsPage/SearchComponent'

const Assets = () => {
    return (
        <div>
            <h1 className='heading-dashboard'>Assets</h1>
            <SearchComponent />
            <DisplayAsset />
        </div>
    )
}

export default Assets