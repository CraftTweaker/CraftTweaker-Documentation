::requiredMod[Mystical Agriculture]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/mystical-agriculture}

# Mystical Agriculture Infusion Crafting

Infusion Crafting is ***NOT*** a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and normal removal methods will not work for it.

## Package


:::group{name="Importing The Package"}

You may want to import the class so you don't need to use the full package name everywhere, to do this simply add the following to the top of your script:

```zenscript
import mods.mysticalagriculture.InfusionCrafting;
```

Now you can reference the class like so:
```zenscript
InfusionCrafting.addRecipe("test", <item:minecraft:stick> * 10, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>]);
```
:::

## Methods

:::group{name="Add Recipes"}

The following script will add a recipe that will output 10 Sticks when a Diamond, a Stick and any Item from the Iron Ingot Tag is infused.

```zenscript
// mods.mysticalagriculture.InfusionCrafting.addRecipe(id as string, output as IItemStack, inputs as IIngredient[]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("test", <item:minecraft:stick> * 10, [<item:minecraft:diamond>, <tag:forge:ingots/iron>, <item:minecraft:stick>]);
```
:::

:::group{name="Remove Recipes"}

The following script will remove the Infusion Crafting Recipe for Cow Seeds.

```zenscript
// mods.mysticalagriculture.InfusionCrafting.remove(output as IItemStack);

mods.mysticalagriculture.InfusionCrafting.remove(<item:mysticalagriculture:cow_seeds>);
```