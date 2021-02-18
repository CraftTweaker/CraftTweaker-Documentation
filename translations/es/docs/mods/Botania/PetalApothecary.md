# Botania Petal Apothecary

The Petal Apothecary is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The follow script will add a recipe to the Petal Apothecary that will give a Diamond when a piece of Dirt is given to the Petal Apothecary (You will still need to complete the recipe by throwing Wheat Seeds into the Petal Apothecary).

```zenscript
// <recipetype:botania:petal_apothecary>.addRecipe(String name, IItemStack output, IIngredient... inputs)

<recipetype:botania:petal_apothecary>.addRecipe("petal_apothecary_test", <item:minecraft:diamond>, <item:minecraft:dirt>);
```

#### Remove Recipes

The follow script will remove all Petal Apothecary recipes that output a Hydroangeas

```zenscript
// <recipetype:botania:petal_apothecary>.removeRecipe(IItemStack output);

<recipetype:botania:petal_apothecary>.removeRecipe(<item:botania:hydroangeas>);
```



