export function filler(v) {
    let i = 1;

    for (i = 1; i <= 20; i++) {
        v[i] = Math.floor(Math.random() * 100) + 1;
    }
    return v;
}