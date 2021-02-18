::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Arc Furnace

The Arc Furnace is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output Bedrock and a Gold Nugget (as Slag) after 2000 ticks when two Coal Blocks, a Diamond and any Item from the Wool Tag is put into an Arc Furnace. The recipe will use 100000 IF.

```zenscript
// <recipetype:immersiveengineering:arc_furnace>.addRecipe(string recipePath, IIngredient mainIngredient, IIngredient[] additives, int time, int energy, IItemStack[] outputs, @Optional(<item:minecraft:air>) IItemStack slag)

<recipetype:immersiveengineering:arc_furnace>.addRecipe("coal_to_bedrock", <item:minecraft:coal_block> * 2, [<item:minecraft:diamond> * 1, <tag:items:minecraft:wool>], 2000, 100000, [<item:minecraft:bedrock>], <item:minecraft:gold_nugget>);
```

#### Remove Recipes

Removes any recipes where at least one of the output matches the output provided.

The follow script will remove two recipes from the Arc Furnace.

The first recipe that is removed is the recipe for Slag, since `checkSlag` is `true`, it will remove all recipes that output Slag. The second recipe that is removed is the recipe for three Iron Ingots.

```zenscript
// <recipetype:immersiveengineering:arc_furnace>.removeRecipe(IItemStack output, @Optional(false) bool checkSlag)

<recipetype:immersiveengineering:arc_furnace>.removeRecipe(<item:immersiveengineering:slag>, true);
<recipetype:immersiveengineering:arc_furnace>.removeRecipe(<item:minecraft:iron_ingot> * 3);
```