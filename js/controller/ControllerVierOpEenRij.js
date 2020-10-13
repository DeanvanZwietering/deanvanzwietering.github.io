import {ModelVierOpEenRij} from "../model/ModelVierOpEenRij.js";
import {ViewVierOpEenRij} from "../view/ViewVierOpEenRij.js";
import {Player} from "../model/Player.js";


export class ControllerVierOpEenRij {

    constructor() {
        this.model = new ModelVierOpEenRij();
        this.view = new ViewVierOpEenRij(this);
        
        this.beurt = 0;
    }


    magZet(rij, kolom)
    {
        if(this.model.vakjes[rij][kolom] === this.player1.color || this.model.vakjes[rij][kolom] === this.player2.color)
        {
            return false;
        }
        for(let r=5;r>=0;r--)
        {
            if(this.model.vakjes[r][kolom]==="white")
            {
                this.beurt++;
                if ((this.beurt % 2) === 1) {
                    this.model.vakjes[r][kolom]=this.player1.color;
                } else {
                    this.model.vakjes[r][kolom]=this.player2.color;
                }
                return true;
            }
        }
        return false;
    }


    updateGrid(gameDivs) {
        let i=0;
        gameDivs.forEach(element => {
            let kolom = i % 7;
            let rij = (i - kolom) / 7;

            element.style.backgroundColor = this.model.vakjes[rij][kolom];
            i++;
        })
    }

    validatePlayers() {
        let playerName = document.querySelectorAll('.player_name');
        let playerColor = document.querySelectorAll('.player_color');

        this.player1 = new Player(playerName[0].value, playerColor[0].value);
        this.player2 = new Player(playerName[1].value, playerColor[1].value);

        if (playerName[0].value.length !== 0 || playerName[1].value.length !== 0) {
            if (this.player1.color !== this.player2.color) {
                console.log("Naam : " + this.player1.name + " Color : " + this.player1.color);
                console.log("Naam : " + this.player2.name + " Color : " + this.player2.color);
                this.toggleScreens();
                this.setPlayerValues();
            } else {
                window.alert("Beide spelers moeten verschillende kleuren hebben!")
            }
        } else {
            window.alert("Beide spelers moeten een naam invullen!")
        }
    }


    toggleScreens() {
        let displayNone = document.querySelectorAll('.hidden');
        let displayFlex = document.querySelectorAll('.flexbox');

        displayNone.forEach(element => {
            element.classList.toggle('flexbox');
            element.classList.remove('hidden');
        })
        displayFlex.forEach( element => {
            element.classList.toggle('hidden');
            element.classList.remove('flexbox');
        })
    }


    setPlayerValues() {
        let player1GamescreenName = document.querySelector('#player1_input_name');
        let player1GamescreenColor = document.querySelector('#player1_select_color');

        let player2GamescreenName = document.querySelector('#player2_input_name');
        let player2GamescreenColor = document.querySelector('#player2_select_color');

        player1GamescreenName.innerHTML = this.player1.name;
        player1GamescreenColor.style.backgroundColor = this.player1.color;

        player2GamescreenName.innerHTML = this.player2.name;
        player2GamescreenColor.style.backgroundColor = this.player2.color;
    }
}