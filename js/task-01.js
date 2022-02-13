//---------------Number of categories
const listEl = document.querySelector('#categories');     
const numberOfCategories = listEl.querySelectorAll('.item').length;
console.log("Number of categories:", numberOfCategories);

//-------------Category and Elements
const itemCategoriesEl = listEl.querySelectorAll('.item');

//------------Припомощи цыкла
for (let i = 0; i < itemCategoriesEl.length; i += 1) {
    const element = itemCategoriesEl[i];

    const titleEl = element.querySelector('h2');
    titleEl.textContent;
    const itemEl = element.querySelectorAll('li').length;
    
    console.log('Category:', titleEl.textContent);
    console.log("Elements:", itemEl);
    
};


//------------При помощи функции и метода Map()

// const logInfoOfCategory = (element) => {
//     const titleEl = element.querySelector('h2');
//     titleEl.textContent;

//     const itemEl = element.querySelectorAll('li').length;

//     console.log('Category:', titleEl.textContent);
//     console.log("Elements:", itemEl);
      
// }

// const result = [...itemCategoriesEl].map(logInfoOfCategory);








