import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

function GroupCard({ group }) {
    return (
        <div className='text-center bg-dark text-white p-5 rounded rounded-5' style={{ width: '30%' }}>
            <div className='d-inline-flex align-items-center justify-content-between mb-3'>
                <FontAwesomeIcon className='text-warning' icon={faTrophy} size="2x" />
                <h2 className='ps-3 fs-1'>{group.name}</h2>
            </div>
            <table className="table table-dark table-borderless w-100 text-center">
                <thead className='fs-5'>
                    <tr>
                        <th>#</th>
                        <th className='text-start' style={{ width: '30%' }}>Team</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>Goals</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {[...group.teams]
                        .sort((a, b) => b.points - a.points)
                        .map((team, index) => (
                            <tr key={index}>
                                <th>
                                    <div className={`rounded rounded-3 px-2 py-1 ${index < 2 && "bg-success"}`}>
                                        {index+1}
                                    </div>
                                </th>
                                <td className='text-start'>{team.name}</td>
                                <td>{team.played}</td>
                                <td>{team.won}</td>
                                <td>{team.drawn}</td>
                                <td>{team.lost}</td>
                                <td>{`${team.goals[0]} : ${team.goals[1]}`}</td>
                                <td>{team.points}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default GroupCard