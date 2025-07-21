import FinalMatchCard from '@/app/components/finalMatchCard/finalMatchCard'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'


function Finals() {
    return (
        <div className='p-2'>
            <div className='row justify-content-between'>
                <div className='col-3 my-1'>
                    <FinalMatchCard />
                </div>
                <div className='col-3 my-1'>
                    <FinalMatchCard />
                </div>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-3 my-1'>
                    <FinalMatchCard />
                </div>
                <div className='col-3 my-1 text-center'>
                    <FontAwesomeIcon className='text-warning fa-7x' icon={faTrophy} />
                    <FinalMatchCard />
                    <FinalMatchCard />
                </div>
                <div className='col-3 my-1'>
                    <FinalMatchCard />
                </div>
            </div>
            <div className='row justify-content-between'>
                <div className='col-3 my-1'>
                    <FinalMatchCard />
                </div>
                <div className='col-3 my-1'>
                    <FinalMatchCard />
                </div>
            </div>
        </div>
    )
}

export default Finals