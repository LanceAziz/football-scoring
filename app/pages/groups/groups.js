"use client"
import React, { useEffect, useState } from 'react'
import GroupdCard from '@/app/components/group-card/groupCard';
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "@/app/database/database";

function Groups() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const db = getDatabase(app);
        const groupsRef = ref(db, "groups");
        const unsubscribe = onValue(groupsRef, (snapshot) => {
            setGroups(snapshot.exists() ? snapshot.val() : []);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className='container-fluid'>
            <div className='p-5'>
                <div className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
                    {
                        groups.map((group, index) => {
                            return (
                                <GroupdCard key={index} group={group} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Groups