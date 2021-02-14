::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Sawmill

The Sawmill is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Sawing Recipe

The following script will add a recipe to the Sawmill that will output five Bone and 2 Bone Meal from a Bone Block and 1000 IF.

This recipe requires a Sawblade to be in the Sawmill to work.

```zenscript
// <recipetype:immersiveengineering:sawmill>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack output, IItemStack[] outputSecondaries)

<recipetype:immersiveengineering:sawmill>.addRecipe("splitting_bones", <item:minecraft:bone_block>, 1000, <item:minecraft:bone> * 5, [<item:minecraft:bone_meal> * 2]);
```

#### Add Sawing and Stripping Recipe

The following script will add a recipe to the Sawmill that will, if a Sawblade is present, output Grass, two Sticks and Sawdust, but if a Sawblade is not present, will only output Grass and a Dead Bush. The input for this recipe is any Item from the Saplings Tag and 1200 IF.

This recipe does not need a Sawblade to be present in the Sawmill.

```zenscript
//<recipetype:immersiveengineering:sawmill>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack strippedOutput, IItemStack[] strippedOutputSecondaries, IItemStack output, IItemStack[] outputSecondaries)

<recipetype:immersiveengineering:sawmill>.addRecipe("shredding_seeds", <tag:items:minecraft:saplings>, 1200, <item:minecraft:dead_bush>, [<item:minecraft:grass>], <item:minecraft:stick> * 2, [<item:immersiveengineering:dust_wood>]);
```

#### Remove Recipes

The follow script will remove all recipes (Sawing or Stripping) from the Sawmill that output Oak Planks as either the primary or secondary result.

```zenscript
// <recipetype:immersiveengineering:sawmill>.removeRecipe(output as IItemStack)

<recipetype:immersiveengineering:sawmill>.removeRecipe(<item:minecraft:oak_planks>);
```