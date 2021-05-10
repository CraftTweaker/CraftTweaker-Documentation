::requiredMod[Mystical Agriculture]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture}

# Mystical Agriculture Reprocessor Crafting

Reprocessor Crafting is ***NOT*** a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and normal removal methods will not work for it.

## Package


:::group{name="Importing The Package"}

You may want to import the class so you don't need to use the full package name everywhere, to do this simply add the following to the top of your script:

```zenscript
import mods.mysticalagriculture.ReprocessorCrafting;
```

Now you can reference the class like so:
```zenscript
ReprocessorCrafting.addRecipe("reprocessor_test", <item:minecraft:diamond>, <item:minecraft:apple>);
```
:::

## Methoden

:::group{name="Add Recipes"}

The following script will add a recipe that will output a Diamond when an Apple is Reprocessed.

```zenscript
// mods.mysticalagriculture.ReprocessorCrafting.addRecipe(id as string, output as IItemStack, input as IIngredient);

mods.mysticalagriculture.ReprocessorCrafting.addRecipe("reprocessor_test", <item:minecraft:diamond>, <item:minecraft:apple>);

:::

:::group{name="Remove Recipes"}

The following script will remove the Reprocessor Crafting Recipe for Cow Essence.

```zenscript
// mods.mysticalagriculture.ReprocessorCrafting.remove(output as IItemStack);

mods.mysticalagriculture.ReprocessorCrafting.remove(<item:mysticalagriculture:cow_essence>);
```