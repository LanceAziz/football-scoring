import React from 'react'
import { groups } from '@/app/data/data';
import GroupdCard from '@/app/components/group-card/groupCard';

function Groups() {
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