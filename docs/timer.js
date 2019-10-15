let k;
export function timeCounter(start) {
    if (start) {
        k = new Date();
    } else {
        return Math.abs(k - new Date()) / 1000;
    }
}