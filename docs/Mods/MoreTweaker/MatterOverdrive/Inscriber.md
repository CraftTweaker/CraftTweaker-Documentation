# Inscriber

## Package
`moretweaker.matteroverdrive.Inscriber`

## Addition

```zenscript
//moretweaker.matteroverdrive.Inscriber.addRecipe(IIngredient input1, IIngredient input2, IItemStack output, int energy, int timeTicks);
moretweaker.matteroverdrive.Inscriber.addRecipe(<minecraft:coal>, <minecraft:dirt>, <minecraft:diamond>, 10000, 1200);
```

## Removal

```zenscript
//moretweaker.matteroverdrive.Inscriber.removeRecipe(IIngredient output);
moretweaker.matteroverdrive.Inscriber.removeRecipe(<minecraft:diamond>);

moretweaker.matteroverdrive.Inscriber.removeAll();
```