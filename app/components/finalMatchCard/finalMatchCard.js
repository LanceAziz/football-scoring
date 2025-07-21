import React from 'react'
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './finalMatchcardStyles.module.css'

function FinalMatchCard({ match }) {
    function getAvatarText(name) {
        if (!name) return null;
        return name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase();
    }

    return (
        <div className='bg-white text-dark d-flex justify-content-center align-items-center gap-3 rounded-4 pt-3'>
            {match.teams.map((team, idx) => (
                <div
                    key={team.key || idx}
                    className={`d-flex flex-column justify-content-between align-items-center ${match.winner == null || match.winner === team.name ? "" : styles["dark-strike"]}`}>
                    <h2 className={`${match.winner == null ? 'bg-secondary' : match.winner !== team.name ? 'bg-dark' : 'bg-success'} text-white p-4 rounded-4`}>
                        {getAvatarText(team.name) == null
                            ? <FontAwesomeIcon icon={faHourglassStart} className='text-white' />
                            : getAvatarText(team.name)}
                    </h2>
                    <p>{team.name}</p>
                    <p>
                        {team.score}
                        {team.penalties_score != null && ` (${team.penalties_score})`}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default FinalMatchCard