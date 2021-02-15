::requiredMod[Blood Magic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/botania}

# Blood Magic Tartaric Forge / Hell Forge

The Tartaric Forge / Hell Forge is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond when Coal is given to a Tartaric Forge / Hell Forge. The Forge requires a minimum of 0 souls and will drain 500 souls.

```zenscript
// <recipetype:bloodmagic:altar>.addRecipe(String name, IItemStack output, IIngredient[] input, double minimumSouls, double soulDrain)

<recipetype:bloodmagic:soulforge>.addRecipe("soulforge_test", <item:minecraft:diamond>, [<item:minecraft:coal>], 0, 500);
```

#### Remove Recipes

The follow script will remove all recipes from the Tartaric Forge / Hell Forge that output a Soul Axe

```zenscript
// <recipetype:bloodmagic:soulforge>.removeRecipe(IItemStack output);

<recipetype:bloodmagic:soulforge>.removeRecipe(<item:bloodmagic:soulaxe>);
```