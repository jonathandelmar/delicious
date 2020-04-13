const apiUrl = 'http://localhost:3001';
const recipesApiUrl = apiUrl + '/recipes';
const specialsApiUrl = apiUrl + '/specials';

const makeRequest = (url, method) => {
  const READYSTATEDONE = 4;
  let request = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
		request.onreadystatechange = () => {
      if (request.readyState !== READYSTATEDONE) {
        return;
      }

			if (request.status >= 200 && request.status < 300) {
        resolve(request);
        return;
      }

      reject({
        status: request.status,
        statusText: request.statusText
      });
		};

		request.open(method || 'GET', url, true);
		request.send();
	});
}

/**
 * Fetch recipes from API source
 * @return Promise
 */
const getRecipes = () => {
  return makeRequest(recipesApiUrl, 'GET')
          .then(request => JSON.parse(request.response));
}

/**
 * Fetch a recipe from API source
 * @return Promise
 */
const getRecipe = uuid => {
  return getRecipes().then(recipes => {
    for (let recipe of recipes) {
      if (recipe.uuid === uuid) {
        return recipe;
      }
    }
  });
}

/**
 * Fetch ingredient specials from API source
 * @return Promise
 */
const getIngredientSpecials = () => {
  return makeRequest(specialsApiUrl, 'GET')
          .then(request => JSON.parse(request.response));
}