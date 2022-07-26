import React, { useEffect } from 'react'
import SingleAsset from './SingleAsset'
import Wrapper from '../../assets/Wrappers/assetsPage/DisplayAsset'
import { getAssets } from '../../redux-toolkit/assets'
import { useDispatch, useSelector } from 'react-redux'




const DisplayAsset = () => {
    const { assets, totalAssets } = useSelector((store => store.assets))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAssets())
    }, [])

    return (
        <div>
            {totalAssets} asset{assets.length > 1 && 's'} found
            <Wrapper>
                <SingleAsset />
            </Wrapper>
        </div>

    )
}

export default DisplayAsset