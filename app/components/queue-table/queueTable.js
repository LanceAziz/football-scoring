import React from 'react'
import styles from './queueTableStyles.module.css'

function QueueTable({ table }) {

    function formatEta(minutes) {
        if (minutes >= 60) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return mins === 0 ? `${hours} hr` : `${hours} hr ${mins} min`;
        }
        return `${minutes} min`;
    }

    // Find indexes of unplayed matches
    const unplayedIndexes = table.queue
        .map((match, idx) => (!match.isPlayed ? idx : null))
        .filter(idx => idx !== null);

    return (
        <div className='text-center p-5'>
            <h2 className='pb-4 text-white'>{table.name}</h2>
            <div className="rounded-4 overflow-hidden bg-dark py-4">
                <table className="table table-dark table-striped w-100 text-center m-0">
                    <thead className='fs-6'>
                        <tr>
                            <th>#</th>
                            <th>Time Remaining</th>
                            <th>Team 1</th>
                            <th>Team 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.queue.map((match, index) => {
                            let timeLabel;
                            if (match.isPlayed) {
                                timeLabel = "Played";
                            } else {
                                const pos = unplayedIndexes.indexOf(index);
                                if (pos === 0) {
                                    timeLabel = "Playing now";
                                } else if (pos === 1) {
                                    timeLabel = "Up next";
                                } else {
                                    timeLabel = formatEta(pos * 7);
                                }
                            }
                            return (
                                <tr key={index}
                                    className={match.isPlayed ? styles["dark-strike"] : ""}
                                >
                                    <th>{match.id}</th>
                                    <td className={
                                        unplayedIndexes.indexOf(index) === 0 ? "text-success" :
                                        unplayedIndexes.indexOf(index) === 1 && "text-warning"
                                    }>
                                        {timeLabel}
                                    </td>
                                    <td>{match.team1}</td>
                                    <td>{match.team2}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QueueTable