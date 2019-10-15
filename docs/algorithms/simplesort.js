import { filler } from '../vectorFiller.js';
import { update } from '../visualiser.js';
import { timeCounter } from '../timer.js';

let timer = document.getElementById("timer");
timer.innerHTML = "0s"

let v = Array(60);
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


export async function simpleSort() {
    timeCounter(true);
    v = filler(v);
    update(v, true);

    for (let i = 1; i < 60; i++) {
        for (let j = i + 1; j <= 60; j++) {
            if (v[i] > v[j]) {

                let aux = v[i];
                v[i] = v[j];
                v[j] = aux;
                await sleep(0);
                update(v);
            }
        }
    }
    timer.innerHTML = timeCounter(false) + 's';
}