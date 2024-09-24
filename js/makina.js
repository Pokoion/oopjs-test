import { Jokalari } from "../js/jokalari.js";

class Makina  extends Jokalari{
    constructor(izena){

        super(izena, Math.floor(Math.random()*100) + 1, 130)
    }
}
export {Makina}