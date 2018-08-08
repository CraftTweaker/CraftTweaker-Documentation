# Mana Infusion

The ManaInfusion package is used for adding or removing recipes to/from the Botania ManaPool.

## Calling
You can call the ManaInfusion package using `mods.botania.ManaInfusion`

## Find all registered Recipes
You can find all registered ManaInfusion recipes using [`/ct botania infusions`](/Mods/Modtweaker/Botania/Commands/).

## Recipe addition

```
//mods.botania.ManaInfusion.addInfusion(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(IItemStack output, IIngredient input, int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## Recipe removal

```
//mods.botania.ManaInfusion.removeRecipe(IIngredient output);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```