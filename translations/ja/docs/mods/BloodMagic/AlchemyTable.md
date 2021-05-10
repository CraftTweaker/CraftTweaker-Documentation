::requiredMod[Blood Magic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Alchemy Table

The Alchemy Table is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond when Coal is given to an Alchemy Table. The table will take 5 seconds to craft, requires a minimum tier of 0 and will drain (syphon) 0 LP from the player.

```zenscript
// <recipetype:bloodmagic:alchemytable>.addRecipe(name as string, output as IItemStack, input as IIngredient[], syphon as int, ticks as int, minimumTier as int)

<recipetype:bloodmagic:alchemytable>.addRecipe("alchemytable_test", <item:minecraft:diamond>, [<item:minecraft:coal>], 0, 100, 0);
```

#### Remove Recipes

The following script will remove all recipes from the Alchemy Table that output a clay ball.

```zenscript
// <recipetype:bloodmagic:alchemytable>.removeRecipe(output as IItemStack);

<recipetype:bloodmagic:alchemytable>.removeRecipe(<item:minecraft:clay_ball>);
```