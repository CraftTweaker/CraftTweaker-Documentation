# Botania Runic Altar

The Runic Altar is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The follow script will add a recipe to the Runic Altar that will use 200 mana and give a Diamond when a piece of Dirt and an Apple are put in the Runic Altar (You will still need to complete the recipe by giving the Altar a piece of Living Rock).

```zenscript
// <recipetype:botania:runic_altar>.addRecipe(String name, IItemStack output, int mana, IIngredient... inputs)

<recipetype:botania:runic_altar>.addRecipe("rune_altar_test", <item:minecraft:diamond>, 200, <item:minecraft:dirt>, <item:minecraft:apple>);
```

#### Remove Recipes

The follow script will remove all Runic Altar recipes that output a Rune of Wrath

```zenscript
// <recipetype:botania:runic_altar>.removeRecipe(IItemStack output);

<recipetype:botania:runic_altar>.removeRecipe(<item:botania:rune_wrath>);
```



