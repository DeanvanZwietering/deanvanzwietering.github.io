import {ModelVierOpEenRij} from "../model/ModelVierOpEenRij.js";
import {ViewVierOpEenRij} from "../view/ViewVierOpEenRij.js";
import {Player} from "../model/Player.js";


export class ControllerVierOpEenRij {
    constructor() {
        this.model = new ModelVierOpEenRij();

        this.player1 = new Player('', 'red');
        this.player2 = new Player('','blue');

        this.view = new ViewVierOpEenRij(this);
    }

    magZet(rij, kolom)
    {
        if(this.model.vakjes[rij][kolom] === "vol")
        {
            return false;
        }
        for(let r=5;r>=0;r--)
        {
            if(this.model.vakjes[r][kolom]==="leeg")
            {
                this.model.vakjes[r][kolom]="vol";
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

            if(this.model.vakjes[rij][kolom] === "vol")
            {
                element.style.backgroundColor = "red";
            } else {
                element.style.backgroundColor = "white";
            }
            i++;
        })
    }
}