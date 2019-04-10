var recipes = {spicybeans:"red beans"};

function updateObjectWithKeyAndValue (obj, key, value) {
  recipes.assign({}, obj, {key : value});
  return obj;
}