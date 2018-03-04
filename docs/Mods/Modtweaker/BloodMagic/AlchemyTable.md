# Alchemy Table

## Package
`mods.bloodmagic.AlchemyTable`

## Addition

```
inputs has a max size of 6
//mods.bloodmagic.AlchemyTable.addRecipe(IItemStack output, IItemStack[] inputs, int syphon, int ticks, int minTier);
mods.bloodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## Removal

```
inputs has a max size of 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] inputs);
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```