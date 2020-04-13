// List the regular recipes
getRecipes().then(recipes => {
  let recipeObj = $('.top-catagory-area-product');
  recipes.forEach((recipe) => {
    console.log(recipe);
    let newRecipeObj = recipeObj.clone();
    newRecipeObj.insertAfter(recipeObj);
    $('.single-top-catagory > img', newRecipeObj).attr('src', apiUrl + recipe.images.full);
    $('.top-cta-content > h3', newRecipeObj).text(recipe.title);
    $('.top-cta-content > h6', newRecipeObj).text(recipe.description);
    $('.top-cta-content > a', newRecipeObj).attr('href', 'recipe.html?uuid=' + recipe.uuid);
  });
  recipeObj.remove();
});