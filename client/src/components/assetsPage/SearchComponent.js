import React from 'react'
import Wrapper from '../../assets/Wrappers/SearchComponent'
import FormRow from '../FormRow'
import FormRowSelect from '../FormRowSelect'
import { useDispatch, useSelector } from 'react-redux'
import { handleChange, reset } from '../../redux-toolkit/assets';
import sortTypes from '../../utils/frontEnd/sortTypes';
import { getAssets } from '../../redux-toolkit/assets'
const SearchComponent = () => {
    const dispatch = useDispatch()
    const { search, sort, page } = useSelector((store => store.assets))

    const handleSearch = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        dispatch(handleChange({ name, value }))
        dispatch(getAssets({ page, search }))
    }
    const clearSearch = (e) => {
        e.preventDefault()
        dispatch(reset())
    }

    return (
        <Wrapper>
            <form className='form'>
                {/* search position */}
                <div className='form-center'>
                    <FormRow
                        type='text'
                        name='search'
                        value={search}
                        handleChange={handleSearch}
                        placeholder={'Search for assets here...'}
                    ></FormRow>
                    {/* sort */}
                    <FormRowSelect
                        name='sort'
                        value={sort}
                        handleChange={handleSearch}
                        list={sortTypes}
                    ></FormRowSelect>
                    <button
                        className='red-btn'
                        // disabled={isLoading}
                        onClick={clearSearch}
                    >
                        clear filters
                    </button>
                    {/* rest of the inputs */}
                </div>
            </form>
        </Wrapper>
    )
}

export default SearchComponent