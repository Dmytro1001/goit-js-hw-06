// const list = document.querySelector('#categories');
const list = document.getElementById('categories');


const array = list.querySelectorAll('.item');
const numberOfCategories = array.length;

console.log('Number of categories :', numberOfCategories);

for (const arr of array) {
    const category = arr.firstElementChild.textContent;
    console.log('Category :', category);
    
    const elements = arr.lastElementChild;
    const elementsArr = elements.children;
    const el = elementsArr.length;
    console.log('Elements :', el);
}




