import React, { useEffect } from 'react'
import SingleAsset from './SingleAsset'
import Wrapper from '../../assets/Wrappers/assetsPage/DisplayAsset'
import { getAssets } from '../../redux-toolkit/assets'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'




const DisplayAsset = () => {
    const { assets, totalAssets, refresh } = useSelector((store => store.assets))
    const { loading } = useSelector((store) => store.loading)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAssets())
    }, [refresh])


    if (loading) {
        return <Loading />
    }
    if (assets && assets.length < 1) {
        return (
            <Wrapper>
                <h2>No Assets to display...</h2>
            </Wrapper>
        )
    }

    return (
        <div>
            {assets && <h5>{totalAssets} asset{assets.length > 1 && 's'} found</h5>}
            <Wrapper>
                {assets && assets.map((asset) => {
                    return <SingleAsset key={asset._id} {...asset} />
                })}
            </Wrapper>
        </div>

    )
}

export default DisplayAsset