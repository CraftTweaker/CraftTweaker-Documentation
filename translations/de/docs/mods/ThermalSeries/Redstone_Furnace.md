::requiredMod[Thermal Expansion]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/thermal-expansion}

# Redstone Furnace / Furnace

## Methoden

## Rezept hinzufügen

The following script will add a recipe that will output a Gold Ingot by Smelting an Iron Ingot, creating 2 EXP and consuming 500 RF.

```zenscript
// <recipetype:thermal:furnace>.addRecipe(String name, IItemStack output, IIngredient ingredient, float experience, int energy);
<recipetype:thermal:furnace>.addRecipe("furnace_test", <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>, 2, 500);
```

## Remove Recipes

The following script will remove all Furnace recipes that output a Gold Ingot.

```zenscript
// <recipetype:thermal:furnace>.removeRecipe(IItemStack... output);
<recipetype:thermal:furnace>.removeRecipe(<item:minecraft:gold_ingot>);
```
