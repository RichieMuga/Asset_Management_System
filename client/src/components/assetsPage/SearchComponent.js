import React from 'react'
import Wrapper from '../../assets/Wrappers/SearchComponent'
import FormRow from '../FormRow'
// GoPlus
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux'
import { toggleAssetSidebar } from '../../redux-toolkit/Dashboard'
import CreateAssetsModal from './CreateAssetsModal'

const SearchComponent = () => {
  const dispatch = useDispatch()

  const { isAssetModalOpen } = useSelector((store => store.dashboard))

  //for testing onclick for create asset modal
  const handleModal = (e) => {
    e.preventDefault()
    dispatch(toggleAssetSidebar())
  }
  const handleSearch = (e) => {
    e.preventDefault()
    console.log("search");
  }
  return (
    <Wrapper>

      <section  >
        <button type="submit" className='createAsset' onClick={handleModal}><span className='plusSign'><GoPlus size={17} /> </span>  Create Asset</button>
        {isAssetModalOpen && <CreateAssetsModal />}
        {/* {isAssetModalOpen && <CreateAssetsModal />} */}
      </section>
      <form className='form-serious '>
        <div className={`form-holder`}>
          <FormRow type="text" placeholder={'search by name or tag'} className='width-min-form' />
          <button type="submit" className='green-btn' onClick={handleSearch}>Search</button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchComponent