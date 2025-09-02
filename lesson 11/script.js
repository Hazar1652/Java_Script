fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
        const { recipes } = recipesObject;
        console.log(recipes);

        for (const recipe of recipes) {
            let recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            let title = document.createElement('h3');
            title.textContent = recipe.name;
            recipeDiv.appendChild(title);

            let ul = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement('li');
                li.textContent = ingredient;
                ul.appendChild(li);
            }
            recipeDiv.appendChild(ul);

            document.body.appendChild(recipeDiv);
        }
    });
