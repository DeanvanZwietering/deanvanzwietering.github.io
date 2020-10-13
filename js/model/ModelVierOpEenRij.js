export class ModelVierOpEenRij {

    constructor() {
        this.vakjes=new Array(6);
        for(let i=0;i<7;i++)
        {
            this.vakjes[i]=new Array(7);
        }

        for(let i=0;i<6;i++){
            for(let j=0;j<7;j++)
            {
                this.vakjes[i][j]="white";
            }
        }
    }
}