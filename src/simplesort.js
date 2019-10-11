import { filler } from './vectorFiller.js';
import { update } from './visualiser.js';

let v = Array(20);
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


export async function simpleSort() {
    v = filler(v);
    update(v, true);

    for (let i = 1; i < 20; i++) {
        for (let j = i + 1; j <= 20; j++) {
            if (v[i] > v[j]) {

                let aux = v[i];
                v[i] = v[j];
                v[j] = aux;
                await sleep(10);
                update(v);
            }
        }
    }
}