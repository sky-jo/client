import React, {useState, useEffect} from "react";
import PlayerEntry from "./PlayerEntry";
import "./PlayerList.css";

function PlayerList({ searchParams }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log("using Effect");        
        function getPlayerData() {
            let endpoint = "http://127.0.0.1:3001/get/players";
            console.log(searchParams)
            endpoint += ("/" + searchParams[0] + "/" + searchParams[5] +
                         "/" + searchParams[1] + "/" + searchParams[6] +
                         "/" + searchParams[2] + "/" + searchParams[7] +
                         "/" + searchParams[3]);
            console.log(endpoint);
            fetch(endpoint, {headers:{}})
              .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
              }).then(playerList => {
                let toDisplay = [];
                for (let i = 0; i < playerList.length; i++) {
                    toDisplay.push([
                        playerList[i].NAME, // 0
                        playerList[i].PPG, // 1
                        playerList[i].APG, // 2 
                        playerList[i].RPG, // 3
                        playerList[i].FG_PCT, // 4
                        playerList[i].TEAM, // 5
                    ]);
                }
                return toDisplay
              }).then(toDisplay => {
                console.log(searchParams)
                // sort by PPG
                if (searchParams[4] == '1') {
                    toDisplay.sort((a, b) => {
                        if (a[1] < b[1]) {
                            return 1;
                        }
                        if (a[1] > b[1]) {
                            return -1;
                        }
                        return 0;
                    });
                }
                // sort by APG
                else if (searchParams[4] == '2') {
                    toDisplay.sort((a, b) => {
                        if (a[2] < b[2]) {
                            return 1;
                        }
                        if (a[2] > b[2]) {
                            return -1;
                        }
                        return 0;
                    })
                }
                // sort by RPG
                else if (searchParams[4] == '3') {
                    toDisplay.sort((a, b) => {
                        if (a[3] < b[3]) {
                            return 1;
                        }
                        if (a[3] > b[3]) {
                            return -1;
                        }
                        return 0;
                    })
                }
                // sort by last name, this is how it is ordered in the database
                else if (searchParams[4] == "4") {
                    console.log("name!");
                }
                // this case should not occur
                else {
                    console.log("ERROR, searchParams[4] is invalid.");
                }
                setList(toDisplay);
              }).catch(error => {
                console.log(error);
              }).finally(() => {
                console.log("done!");
              });
        }
        getPlayerData();
    }, [searchParams]);
    
    
    return (
        <table> 
        <tr>
            <th>Team</th><th>Name</th><th>PTS/GM</th><th>AST/GM</th><th>REB/GM</th><th>FG%</th>
        </tr>
        {list.map((player, index) =>
            <PlayerEntry playerInfo={player} key={index} />
        )}
        </table>
    );
}

export default PlayerList;