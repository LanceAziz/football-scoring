import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

function GroupCard() {
    return (
        <div>
            <div className='d-inline-flex bg-dark text-white align-items-center justify-content-between p-3 rounded rounded-4'>
                <FontAwesomeIcon className='text-warning' icon={faTrophy} size="2x" />
                <h2 className='ps-3'>Group A</h2>
            </div>
        </div>
    )
}

export default GroupCard