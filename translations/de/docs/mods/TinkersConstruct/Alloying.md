::requiredMod[Tinkers' Construct]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/tinkers-construct}

# Tinkers' Construct Alloying

Alloying is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script adds an Alloying recipe that will produce Water (Fluid) from 1mb of Molten Rose Gold (Fluid) and 1mb of Lava (Fluid) when combined with a heat of atleast 50°C

```zenscript
// <recipetype:tconstruct:alloying>.addRecipe(name as string, ingredients as CTFluidIngredient[], output as IFluidStack, temperature as int)

<recipetype:tconstruct:alloying>.addRecipe("alloy_test", [<fluid:tconstruct:molten_rose_gold>, <fluid:minecraft:lava>], <fluid:minecraft:water>, 50);
```

#### Remove Recipes

The following script will remove all Allying recipes that output Molten Pig Iron (Fluid).

```zenscript
// <recipetype:tconstruct:alloying>.removeRecipe(output as Fluid)

<recipetype:tconstruct:alloying>.removeRecipe(<fluid:tconstruct:molten_pig_iron>);
```