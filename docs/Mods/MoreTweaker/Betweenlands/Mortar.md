# Pestle & Mortar

## Package
`moretweaker.betweenlands.Mortar`

## Addition

```zenscript
//moretweaker.betweenlands.Mortar.addRecipe(IIngredient input, IItemStack output);
moretweaker.betweenlands.Mortar.addRecipe(<minecraft:redstone_block>, <minecraft:redstone> * 9);
```

## Removal

```zenscript
//moretweaker.betweenlands.Mortar.removeRecipe(IIngredient output);
moretweaker.betweenlands.Mortar.removeRecipe(<minecraft:redstone>);

moretweaker.betweenlands.Mortar.removeAll();
```