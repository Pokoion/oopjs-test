import { Jokalari } from "../js/jokalari.js";

class Estralurtar extends Jokalari{
    constructor(izena){
        super(izena.split("").reverse().join(""), Math.floor(Math.random() * 85) + 1, 150)
    }
}
export {Estralurtar}