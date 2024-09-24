
class Jokalari{
    izena;
    indarra;
    osasuna;
    constructor(izena, indarra, osasuna){
        this.izena = izena
        this.indarra = indarra
        this.osasuna = osasuna
    }
    borrokatu = (jokalari) => {
        if (Math.random() * this.indarra > jokalari.indarra){
            jokalari.osasuna -= this.indarra;
            }else{
            this.osasuna -= jokalari.indarra;
            }
        }   

    get izena(){
        return izena
    }
    //sort((a,b) => a - b)
}

export {Jokalari}