"use strict";

let multiplyNumeric = menu => {
    for (let key in menu) {
        // option 1
        let toNumber = +menu[key]; // <-- '+' converts to number
        if (menu[key] === toNumber) {
            menu[key] *= 2;
        }
        // option 2
        // if (typeof menu[key] == "number") {
        //     menu[key] *= 2;
        // }
    }
}