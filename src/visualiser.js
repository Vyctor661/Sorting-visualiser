let inner = document.getElementById("visualiser");
inner.innerHTML = '';

export function update(v, isNew = false) {

    if (isNew) {
        inner.value = '';
    }
    for (let i = 1; i <= 20; i++) {
        inner.value += v[i] + " ";
    }
    inner.value += "\n";
    inner.scrollBy(0, 100);
}