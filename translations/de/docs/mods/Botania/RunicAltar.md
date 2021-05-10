::requiredMod[Botania]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/botania}

# Botania Runic Altar

The Runic Altar is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script will add a recipe to the Runic Altar that will use 200 mana and give a Diamond when a piece of Dirt and an Apple are put in the Runic Altar (You will still need to complete the recipe by giving the Altar a piece of Living Rock).

```zenscript
// <recipetype:botania:runic_altar>.addRecipe(name as string, output as IItemStack, mana as int, inputs as IIngredient...)

<recipetype:botania:runic_altar>.addRecipe("rune_altar_test", <item:minecraft:diamond>, 200, <item:minecraft:dirt>, <item:minecraft:apple>);
```

#### Remove Recipes

The following script will remove all Runic Altar recipes that output a Rune of Wrath

```zenscript
// <recipetype:botania:runic_altar>.removeRecipe(output as IItemStack);

<recipetype:botania:runic_altar>.removeRecipe(<item:botania:rune_wrath>);
```



