import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../../assets/Wrappers/PageBtnContainer'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux-toolkit/assets';


const PageButtonContainer = () => {
    // const { numOfPages, page } = useAppContext()
    const { numOfPages, page } = useSelector((store) => store.assets)
    const dispatch = useDispatch()

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1
    })
    const nextPage = () => {
        let newPage = page + 1
        if (newPage > numOfPages) {
            newPage = 1
        }
        dispatch(changePage(newPage))
    }
    const prevPage = () => {
        let newPage = page - 1
        if (newPage < 1) {
            newPage = numOfPages
        }
        dispatch(changePage(newPage))
        // dispatch(getAssets)
    }
    return (
        <div className='fullWidth'>
            <Wrapper>
                <button className='prev-btn' onClick={prevPage}>
                    <HiChevronDoubleLeft />
                    prev
                </button>
                <div className='btn-container'>
                    {pages.map((pageNumber) => {
                        return (
                            <button
                                type='button'
                                className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                                key={pageNumber}
                                onClick={() => changePage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        )
                    })}
                </div>
                <button className='next-btn' onClick={nextPage}>
                    next
                    <HiChevronDoubleRight />
                </button>
            </Wrapper>
        </div>

    )
}

export default PageButtonContainer