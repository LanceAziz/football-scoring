import React from 'react'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './finalMatchcardStyles.module.css'

function FinalMatchCard({ match }) {
    function getAvatarText(name) {
        if (!name) return "";
        return name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase();
    }
    return (
        <div className='bg-white text-dark d-flex justify-content-center align-items-center gap-3 rounded-4 pt-3'>
            <div className={`d-flex flex-column justify-content-between align-items-center ${match.winner == null || match.winner == match.team1.name ? "" : styles["dark-strike"]}`}>
                <h2 className={`${match.winner == null ? 'bg-secondary' : match.winner !== match.team1.name ? 'bg-dark' : 'bg-success'} text-white p-4 rounded-4`}>
                    {getAvatarText(match.team1.name)}
                </h2>
                <p>{match.team1.name}</p>
                <p>
                    {match.team1.score}
                    {match.team1.penalties_score != null && ` (${match.team1.penalties_score})`}
                </p>
            </div>
            <div className={`d-flex flex-column justify-content-between align-items-center ${match.winner == null || match.winner == match.team2.name ? "" : styles["dark-strike"]}`}>
                <h2 className={`${match.winner == null ? 'bg-secondary' : match.winner !== match.team2.name ? 'bg-dark' : 'bg-success'} text-white p-4 rounded-4`}>
                    {getAvatarText(match.team2.name)}
                </h2>
                <p>{match.team2.name}</p>
                <p>
                    {match.team2.score}
                    {match.team2.penalties_score != null && ` (${match.team2.penalties_score})`}
                </p>
            </div>
        </div>
    )
}

export default FinalMatchCard