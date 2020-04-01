# Dark Druid Altar

## Package
`moretweaker.betweenlands.DruidAltar`

## Addition

```zenscript
//moretweaker.betweenlands.DruidAltar.addRecipe(IItemStack output, IIngredient[] inputs);
moretweaker.betweenlands.DruidAltar.addRecipe(<minecraft:diamond>, [<minecraft:coal>, <minecraft:dirt>, <minecraft:emerald>, <minecraft:cobblestone>]);
```

## Removal

```zenscript
//moretweaker.betweenlands.DruidAltar.removeRecipe(IIngredient output);
moretweaker.betweenlands.DruidAltar.removeRecipe(<minecraft:diamond>);

moretweaker.betweenlands.DruidAltar.removeAll();
```