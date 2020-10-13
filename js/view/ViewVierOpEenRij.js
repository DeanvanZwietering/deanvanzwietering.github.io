export class ViewVierOpEenRij {

    constructor(c) {
       this.controller = c;

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
        this.controller.validatePlayers();
    }
}