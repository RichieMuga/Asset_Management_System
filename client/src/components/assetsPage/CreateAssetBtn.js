import React from 'react'
import Wrapper from '../../assets/Wrappers/SearchComponent'
// GoPlus
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux'
import { toggleAssetSidebar } from '../../redux-toolkit/Dashboard'
import CreateAssetsModal from './CreateAssetsModal'

const CreateAssetBtn = () => {
  const dispatch = useDispatch()

  const { isAssetModalOpen } = useSelector((store => store.dashboard))

  //for testing onclick for create asset modal
  const handleModal = (e) => {
    e.preventDefault()
    dispatch(toggleAssetSidebar())
  }
  return (
    <Wrapper>
      <section  >
        <button type="submit" className='createAsset' onClick={handleModal}><span className='plusSign'><GoPlus size={17} /> </span>  Create Asset</button>
        {isAssetModalOpen && <CreateAssetsModal />}
        {/* {isAssetModalOpen && <CreateAssetsModal />} */}
      </section>
    </Wrapper>
  )
}

export default CreateAssetBtn