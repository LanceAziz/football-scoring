"use client"
import React, { useState, useEffect } from 'react'
import styles from '@/app/pages/queue/queueStyles.module.css'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "@/app/database/database";
import QueueTable from '@/app/components/queueTable/queueTable';

function Queue() {
    const [courtQueue, setCourtQueue] = useState([]);

    useEffect(() => {
        const db = getDatabase(app);
        const matchesRef = ref(db, "matches");
        const unsubscribe = onValue(matchesRef, (snapshot) => {
            setCourtQueue(snapshot.exists() ? snapshot.val() : []);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            {
                courtQueue.map((table, index) => (
                    <div key={index} className={`${index === 0 && 'border-bottom border-success border-3 '} overflow-auto ${styles['scroll-50']}`}>
                        <QueueTable table={table} />
                    </div>
                )
                )
            }
        </div>
    )
}

export default Queue