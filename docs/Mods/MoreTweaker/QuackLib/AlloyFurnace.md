# Alloy Furnace

## Package
`moretweaker.quacklib.AlloyFurnace`

## Addition

```zenscript
//moretweaker.quacklib.AlloyFurnace.addRecipe(IItemStack output, IIngredient[] inputs);
moretweaker.quacklib.AlloyFurnace.addRecipe(<minecraft:diamond>, [<minecraft:coal>, <minecraft:dirt>]);
```

## Removal

```zenscript
//moretweaker.quacklib.AlloyFurnace.removeRecipe(IIngredient output);
moretweaker.quacklib.AlloyFurnace.removeRecipe(<minecraft:diamond>);

moretweaker.quacklib.AlloyFurnace.removeAll();
```