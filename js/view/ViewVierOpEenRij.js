export class ViewVierOpEenRij {

    constructor(c) {
       this.controller = c;
       this.player1 = this.controller.player1;
       this.player2 = this.controller.player2;

       const gameScreenHTML=document.querySelector('#gameScreen');
       gameScreenHTML.addEventListener('click', event => this.handleClick(event.target));

       const btnStart=document.querySelector('#btnStart');
       btnStart.addEventListener('click', event => this.handleStartGameClick());
    }

    handleClick(e)
    {
        let i=0;
        let rij=0;
        const gameScreenDivs=document.querySelectorAll('#gameScreen > div');
        gameScreenDivs.forEach(element => {
            if(element === e)
            {
                if(this.controller.magZet(rij, i % 7))
                {
                    this.controller.updateGrid(gameScreenDivs);
                    console.log(this.controller.model.vakjes);
                    return;
                }
            }
            i++;
            if ((i % 7) === 0)
            {
                rij++;
            }
        })
    }

    handleStartGameClick()
    {
        let playerName = document.querySelectorAll('.player_name');
        let playerColor = document.querySelectorAll('.player_color');

        this.controller.player1.name = playerName[0].value;
        this.controller.player1.color = playerColor[0].value;
        this.controller.player2.name = playerName[1].value;
        this.controller.player2.color = playerColor[1].value;

        if (this.validate()) {
            console.log("Name: " + this.controller.player1.name + " Color: " + this.player1.color);
            console.log("Name: " + this.controller.player2.name + " Color: " + this.player2.color);
        } else {
            console.log("invalid data");
        }
    }

    validate() {

        if (this.controller.player1.color !== this.controller.player2.color) {
            return true;
        } else {
            return false;
        }
    }
}