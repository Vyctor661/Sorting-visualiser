let inner = document.getElementById("visualiser");
const startOfElement = `<div class="elementContainer"><div class="element" style="height: `;
const endOfElement = `%;"></div></div>`;
inner.innerHTML = '';
let innerBuild = '';
let i = 1;

export function update(v, isNew = false) {

    i = 1;
    innerBuild = '';
    if (isNew) {
        inner.innerHTML = "";
    }

    for (i = 1; i <= 60; i++) {
        innerBuild += startOfElement + String(v[i]) + endOfElement;
    }
    inner.innerHTML = innerBuild;
}