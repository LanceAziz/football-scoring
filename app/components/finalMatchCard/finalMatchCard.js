import React from 'react'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './finalMatchcardStyles.module.css'

function FinalMatchCard() {
    return (
        <div className='bg-white text-dark d-flex justify-content-center align-items-center gap-3 rounded-4 pt-3 px-3'>
            <div className='d-flex flex-column justify-content-between align-items-center' >
                <h2 className='bg-warning p-4 rounded-4'>T1</h2>
                <p>Team 1</p>
                <p>3 (4)</p>
            </div>
            <div className={`d-flex flex-column justify-content-between align-items-center ${styles["dark-strike"]}`} >
                <h2 className='bg-dark text-white p-4 rounded-4'>T2</h2>
                <p>Team 2</p>
                <p>3 (2)</p>
            </div>
        </div>
    )
}

export default FinalMatchCard