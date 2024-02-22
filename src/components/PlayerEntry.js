
function Player({ playerInfo }) {

    return (
        
        <tr>
            <td>{playerInfo[5]}</td><td>{playerInfo[0]}</td><td>{playerInfo[1].toFixed(2)}</td><td>{playerInfo[2].toFixed(2)}</td><td>{playerInfo[3].toFixed(2)}</td><td>{playerInfo[4]}</td>
        </tr>
        
        
    )
}

export default Player