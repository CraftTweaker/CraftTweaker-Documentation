::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Cloche

The Cloche is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`. Along with the Cloche is the Cloche Fertilizer, which is also a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Render Types

Render types are used to define how the BlockState should render when the recipe is being grown in the Cloche.

The default type is "generic".

The following are valid types:

| Name     | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| crop     | Can be used for any 1-block crops with an age property like Wheat |
| stacking | Can be used for stacking plants like Sugar Cane or Cactus         |
| stem     | Can be used for stem-grown plants like Melon or Pumpkin           |
| generic  | Can be used for any block, making it grow in size, like Mushrooms |

## Methods

#### Add Recipe

The following script will add a recipe to the Cloche that uses an Oak Sapling as the seed input, the soil needed is Dirt, it will take 100 ticks to grow and will output an Apple, an Oak Sapling and five Oak Wood. The recipe will render an Oak Sapling while it is growing and it uses the "generic" render type.

```zenscript
// <recipetype:immersiveengineering:cloche>.addRecipe(string name, IIngredient seed, IIngredient soil, int time, IItemStack[] outputs, MCBlock renderBlock, @Optional("generic") string renderType)

<recipetype:immersiveengineering:cloche>.addRecipe("bonsai_oak", <item:minecraft:oak_sapling>, <item:minecraft:dirt>, 100, [<item:minecraft:apple>, <item:minecraft:oak_sapling>, <item:minecraft:oak_wood> * 5], <blockstate:minecraft:oak_sapling>.block, "generic");

```

#### Add Fertilizer

The following script will add a Fertilizer with a growth modifier of 6.0 that uses any Item from the Forge Dusts Sulfur tag.

```zenscript
// <recipetype:immersiveengineering:fertilizer>.addFertilizer(name as string, fertilizer as IIngredient, growthModifier as float)

<recipetype:immersiveengineering:fertilizer>.addFertilizer("sulfur_grow", <tag:items:forge:dusts/sulfur>, 6.0F);
```

#### Remove Recipes

The follow script will remove all recipes from the Cloche that outputs Melon.

```zenscript
// <recipetype:immersiveengineering:cloche>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:cloche>.removeRecipe(<item:minecraft:melon>);
```

#### Remove Fertilizer

The follow script will remove Bone Meal as a Fertilizer.

```zenscript
// <recipetype:immersiveengineering:fertilizer>.removeFertilizer(fertilizer as IItemStack)

<recipetype:immersiveengineering:fertilizer>.removeFertilizer(<item:minecraft:bone_meal>);
```