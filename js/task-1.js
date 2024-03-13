const elemItem = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${elemItem.length}`);

for (const elem of elemItem) {
    showElement(elem);
}

function showElement(element) {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('ul li').length}`);
}