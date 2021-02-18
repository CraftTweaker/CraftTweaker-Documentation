::requiredMod[Blood Magic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Blood Altar

The Blood Altar is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond when Coal is given to a Blood Altar. The Altar will take 5 seconds to craft, requires a minimum tier of 0 and will drain (syphon) 500 LP from the player, consuming 1 LP per tick and will drain 1 LP per tick when not enough LP is provided.

```zenscript
// <recipetype:bloodmagic:altar>.addRecipe(String name, IItemStack output, IIngredient input, int minimumTier, int syphon, int consumeRate, int drainRate)

<recipetype:bloodmagic:altar>.addRecipe("altar_test", <item:minecraft:diamond>, <item:minecraft:coal>, 0, 500, 1, 1);
```

#### Remove Recipes

The follow script will remove all recipes from the Blood Altar that output a Reinforced Slate.

```zenscript
// <recipetype:bloodmagic:altar>.removeRecipe(IItemStack output);

<recipetype:bloodmagic:altar>.removeRecipe(<item:bloodmagic:reinforcedslate>);
```