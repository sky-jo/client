/*
 By: Skyler DeVaughn
 this react component contains a form that allows a user to filter data in the database.
 entering in values for ppg, apg, and rpg will result in only getting players that averaged
 >= the value given by the user. the team attribute will only search for players on the 
 given team. 
 */
import React from 'react';
import './Filter.css';

function Filter({ setSearchParams }) {

    function convert(number) {
        if (number === '') {
            return 0;
        }
        else if (number === "undefined") {
            return 100;
        }
        else {
            return Number (number)
        }
    }
    
    function updateSearch(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        // OFFENSIVE STATS FORM
        console.log(payload);
        let minppg = payload["ppgmin"];
        minppg = convert(minppg);
        let maxppg = payload["ppgmax"]
        maxppg = convert(maxppg);

        let minapg = payload["apgmin"];
        minapg = convert(minapg);
        let maxapg = payload["apgmax"];
        maxapg = convert(maxapg);

        let minrpg = payload["rpgmin"];
        minrpg = convert(minrpg);
        let maxrpg = payload["rpgmax"];
        maxrpg = convert(maxrpg);
        // END OFFENSIVE STATS
        // DEFENSIVE STATS 

        let team = payload["team"];
        let sortBy = payload["sortBy"]
         
        let searchParams = [minppg, minapg, minrpg, team, sortBy, maxppg, maxapg, maxrpg]
        console.log(searchParams);
        setSearchParams(searchParams);
    }

    return (
    <>
        <form onSubmit={updateSearch}>
            <div id="left">
            <label for="ppg">points per game</label><br />
            <label for="ppgmin" class="subLabel">min:</label>
            <input type="number" id="ppgmin" name="ppgmin" defaultValue="0" />
            <label for="ppgmax" class="subLabel">max:</label>
            <input type="number" id="ppgmax" name="ppgmax" defaultValue="100" /><br />

            <label for="apg">assists per game</label><br />
            <label for="apgmin" class="subLabel">min:</label>
            <input type="number" id="apgmin" name="apgmin" defaultValue="0" />
            <label for="apgmax" class="subLabel">max:</label>
            <input type="number" id="apgmax" name="apgmax" defaultValue="100" /><br />

            <label for="rpg">rebounds per game</label><br />
            <label for="rpgmin" class="subLabel">min:</label>
            <input type="number" id="rpgmin" name="rpgmin" defaultValue="0" />
            <label for="rpgmax" class="subLabel">max:</label>
            <input type="number" id="rpgmax" name="rpgmax" defaultValue="100" /><br />
            </div>

            <div id="right">
            <label class="other" for="team">team:</label>
            <input class="other" type="text" id="team" name="team" defaultValue="any" /><br />
            <label class="other" for="sortBy">sort by:</label>
            <select class="other" id="sortBy" name="sortBy">
                <option value="1">Pts / Game</option>
                <option value="2">Ast / Game</option>
                <option value="3">Reb / Game</option>
                <option value="4">Last Name</option>
            </select>
            </div>
            <button type="submit">search</button>
        </form>
    </>);
}

export default Filter