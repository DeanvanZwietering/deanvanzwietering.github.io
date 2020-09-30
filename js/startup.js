window.addEventListener('load', function (){
    const gameScreenHTML=document.querySelector('#gameScreen');
    gameScreenHTML.addEventListener('click', event => handleClick(event.target));

})

let vakjes=new Array(6);
for(let i=0;i<7;i++)
{
    vakjes[i]=new Array(7);
}

for(i=0;i<6;i++){
    for(j=0;j<7;j++)
    {
        vakjes[i][j]="leeg";
    }
}
console.log(vakjes);

function handleClick(e)
{
    let i=0;
    const gameScreenDivs=document.querySelectorAll('#gameScreen > div');
    gameScreenDivs.forEach(element => {
        if(element === e)
        {
            if(magZet(i % 7))
            {
                updateGrid(gameScreenDivs);
                console.log(vakjes);
                return;
            }
        }
        i++;
    })
}

function updateGrid(gameDivs) {
    let i=0;
    let rij = 0;
    gameDivs.forEach(element => {
        if(vakjes[rij][i % 7] === "vol")
        {
            element.style.backgroundColor = "red";
        } else {
            element.style.backgroundColor = "white";
        }
        i++;
        if ((i % 7) === 0)
        {
            rij++;
        }
    })
}


function magZet(kolom)
{
    for(let rij=5;rij>=0;rij--)
    {
        if(vakjes[rij][kolom]==="leeg")
        {
            vakjes[rij][kolom]="vol";
            return true;
        }
    }
    return false;
}

