# Osmium Compressor

As of Mekanism 9.7.0 it is now possible to view all recipe strings of the Osmium Compressor through the command `/ct mekrecipes compressor`

## Addition

```zenscript
mods.mekanism.compressor.addRecipe(IIngredient inputStack, @Optional IGasStack inputGas, IItemStack outputStack);

mods.mekanism.compressor.addRecipe(<mekanism:basicblock:3>, <gas:liquidosmium>, <minecraft:stone>);
mods.mekanism.compressor.addRecipe(<mekanism:basicblock:1>, <minecraft:netherrack>);
```

As of Mekanism 9.7.0 inputGas is no longer restricted to only osmium.

Also as of Mekanism 9.7.0 it is possible to use IIngredients as the inputStack instead of only IItemStacks.

Note: Currently all this does is loop over the different possibilities in java while adding instead of you having to do it in ZenScript. Currently there is no built in support for compound ingredients or oredictionary in the machines themselves.

## Removal

```zenscript
mods.mekanism.compressor.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient inputGas);

mods.mekanism.compressor.removeRecipe(<mekanism:ingot>, <mekanism:otherdust:5>, <gas:liquidosmium>);
mods.mekanism.compressor.removeRecipe(<mekanism:ingot:3>);
```

Specifying an input parameter will only remove the specific recipe that uses said input. Lässt man den Input-Parameter weg, werden alle Rezepte für das jeweilige Item gelöscht.

## Removing all recipes

As of Mekanism 9.7.0 it is now possible to remove all Osmium Compressor recipes. (Das betrifft nicht die Rezepte, welche mittels CraftTweaker hinzugefügt wurden)

```zenscript
mods.mekanism.compressor.removeAllRecipes();
```