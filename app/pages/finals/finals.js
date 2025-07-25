"use client"
import FinalMatchCard from '@/app/components/finalMatchCard/finalMatchCard'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "@/app/database/database";

function Finals() {

    const [finals, setFinals] = useState([]);

    useEffect(() => {
        const db = getDatabase(app);
        const finalsRef = ref(db, "finalMatches");
        const unsubscribe = onValue(finalsRef, (snapshot) => {
            console.log("Finals data loaded successfully", snapshot.val());
            setFinals(snapshot.exists() ? snapshot.val() : []);
        });
        return () => unsubscribe();

    }, []);

    return (
        <div className='px-3 pt-4 d-flex flex-column-reverse'>
            {Object.entries(finals).map(([round, matches], roundIdx) => (
                <div key={roundIdx} className='mb-4'>
                    <div className={`${round != 'c_finals' ? 'row' : 'd-flex flex-column justify-content-center align-items-center'} ${round == 'semi_finals' ? 'justify-content-around' : 'justify-content-center'}`}>
                        {matches.map((match, idx) => (
                            <div key={idx} className="col-3 mb-3 d-flex flex-column-reverse">
                                <FinalMatchCard match={match} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='row justify-content-center'>
                <FontAwesomeIcon className='col-3 text-warning fa-10x' icon={faTrophy} />
            </div>
        </div>
    )
}

export default Finals
