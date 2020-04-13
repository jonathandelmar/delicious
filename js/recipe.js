/**
 * Add recipe directions to the page
 * @param {array} directions
 */
const addRecipeDirections = (directions) => {
  const recipeStep = $('.single-preparation-step');
  directions.forEach((step, index) => {
    let newRecipeStep = recipeStep.clone();
    newRecipeStep.insertBefore(recipeStep);

    let instructions = step.instructions;
    if (step.optional) {
      instructions = '[Optional] ' + instructions;
    }
    $('p', newRecipeStep).text(instructions);
    $('h4', newRecipeStep).text( (directions.length-index) + '.');
  });
  recipeStep.remove();
}

/**
 * Add recipe ingredients to the page
 * @param {array} ingredients
 */
const addRecipeIngredients = (ingredients) => {
  const ingredientItem = $('.ingredient-item');
  ingredients.forEach((ingredient) => {
    let newIngredientItem = ingredientItem.clone();
    newIngredientItem.insertBefore(ingredientItem);

    let item = ingredient.measurement + ' ' + ingredient.name;
    if (ingredient.amount) {
      item = ingredient.amount + item;
    }
    $('label', newIngredientItem).text(item);
  });
  console.log(ingredientItem);
  ingredientItem.remove();
}

var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('uuid')) {
  const uuid = urlParams.get('uuid');

  getRecipe(uuid).then(recipe => {
    console.log(recipe);

    $('.breadcumb-area').attr('style', 'background-image: url(' + apiUrl + recipe.images.full + ');');
    $('.receipe-headline > h2').text(recipe.title);
    $('.receipe-headline > h4').text(recipe.description);
    $('.receipe-headline > span:first-child').text(recipe.editDate);
    $('.receipe-duration > h6:nth-child(1)').text("Prep: " + recipe.prepTime + " mins");
    $('.receipe-duration > h6:nth-child(2)').text("Cook: " + recipe.cookTime + " mins");
    $('.receipe-duration > h6:nth-child(3)').text("Yields: " + recipe.servings + " Servings");

    addRecipeDirections(recipe.directions);
    addRecipeIngredients(recipe.ingredients);
  });
}