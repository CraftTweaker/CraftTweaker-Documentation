# Enderfuge

## Package
`moretweaker.enderfuge.EnderFuge`

## Addition

```zenscript
//moretweaker.enderfuge.EnderFuge.addRecipe(IItemStack output, IIngredient input);
moretweaker.enderfuge.EnderFuge.addRecipe(<minecraft:diamond>, <minecraft:coal>);

//moretweaker.enderfuge.EnderFuge.addFuel(IIngredient fuel, optional int burnTicks);
moretweaker.enderfuge.EnderFuge.addFuel(<minecraft:dirt>, 1200);
```

## Removal

```zenscript
//moretweaker.enderfuge.EnderFuge.removeRecipe(IIngredient output);
moretweaker.enderfuge.EnderFuge.removeRecipe(<ore:nuggetIron>);

//moretweaker.enderfuge.EnderFuge.removeFuel(IIngredient fuel);
moretweaker.enderfuge.EnderFuge.removeFuel(<minecraft:ender_pearl>);

moretweaker.enderfuge.EnderFuge.removeAllRecipes();

moretweaker.enderfuge.EnderFuge.removeAll();
```