const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientList = document.getElementById('ingredients'); 
  const ingredientPcs = ingredients.map(ingredient => {
  const food = document.createElement('li');
  food.textContent = ingredient;
  return food;
  
  })
  ingredientList.append(...ingredientPcs)

