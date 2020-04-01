# Compressor

## Package
`moretweaker.infinitycraft.Compressor`

## Addition

```zenscript
//moretweaker.infinitycraft.Compressor.addRecipe(IIngredient input, IItemStack output, optional int experience);
moretweaker.infinitycraft.Compressor.addRecipe(<minecraft:coal>, <minecraft:diamond>, 40);
```

## Removal

```zenscript
//moretweaker.infinitycraft.Compressor.removeRecipe(IIngredient output);
moretweaker.infinitycraft.Compressor.removeRecipe(<minecraft:diamond>);

moretweaker.infinitycraft.Compressor.removeAll();
`````