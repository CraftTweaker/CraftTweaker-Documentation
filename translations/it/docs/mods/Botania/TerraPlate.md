# Botania Terra Plate

The Terra Plate is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The follow script will add a recipe to the Terra plate that will use 2000 Mana, and output a Diamond after giving the Terra Plate a piece of Dirt.

```zenscript
// <recipetype:botania:terra_plate>.addRecipe(String name, IItemStack output, int mana, IIngredient... inputs)

<recipetype:botania:terra_plate>.addRecipe("terra_plate_test", <item:minecraft:diamond>, 2000, <item:minecraft:dirt>);
```

#### Remove Recipes

The follow script will remove all Terra Plate recipes that output a Terrasteel Ingot.

```zenscript
// <recipetype:botania:terra_plate>.removeRecipe(IItemStack output);

<recipetype:botania:terra_plate>.removeRecipe(<item:botania:terrasteel_ingot>);
```



