const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories].map(category => 
    `Категория: ${category.firstElementChild.textContent}
    Количество элементов: ${category.children[1].children.length}`
).join("\n");
console.log(categoriesArray)

