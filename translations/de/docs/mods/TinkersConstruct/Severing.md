::requiredMod[Tinkers' Construct]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/tinkers-construct}

# Tinkers' Construct Severing

Severing is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script adds a Severing recipe that drops a Diamond when a Sheep (Entity) is killed.

```zenscript
// <recipetype:tconstruct:severing>.addRecipe(name as string, ingredient as CTEntityIngredient, output as IItemStack)

<recipetype:tconstruct:severing>.addRecipe("beaheading_test", <entitytype:minecraft:sheep>, <item:minecraft:diamond>);
```

#### Remove Recipes

The following script does the following:

1) Removes all Severing recipes that drop a Skeleton Skull. 2) Removes all Severing recipes that drop from a Creeper (Entity).

```zenscript
// <recipetype:tconstruct:severing>.removeRecipe(output as IItemStack)
// <recipetype:tconstruct:severing>.removeRecipe(input as CTEntityIngredient)

<recipetype:tconstruct:severing>.removeRecipe(<item:minecraft:skeleton_skull>);
<recipetype:tconstruct:severing>.removeRecipe(<entitytype:minecraft:creeper>);
```