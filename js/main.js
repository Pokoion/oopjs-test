import { Estralurtar } from "../js/estralurtar.js";
import { Gizaki } from "../js/gizaki.js";
import { Makina } from "../js/makina.js";

    // 1. Instantziak sortu
let zelai = [];
for (let i = 1; i <= 50; i++) {
    zelai.push(new Makina(`m${i}`));
    zelai.push(new Gizaki(`g${i}`));
    zelai.push(new Estralurtar(`e${i}`));
}

    // 2. Array-a ausaz ordenatu
    zelai.sort(() => Math.random() - 0.5);

    // 3. Borrokak
    console.log("Borrokaren hasierako egoera: " + zelai.map((jokalari, index) => index + "." + jokalari.izena))

    while (zelai.length > 1) {

        // Borrokak bikoteka jarri
        for (let i = 0; i < zelai.length-1; i += 2) {
            zelai[i].borrokatu(zelai[i + 1]);
        }
        
        // Isasuna <= 0 dutenak atera
        zelai = zelai.filter(player => player.osasuna > 0);

        console.log("Zelaia borroka ondoren: " + zelai.map((jokalari, index) => index + "." + jokalari.izena))
        
        // Hurrengo borrokarako berriz ordenatu
        zelai.sort(() => Math.random() - 0.5);
    }
    console.log(`Jokoaren irabazlea ${zelai[0].izena} da`);