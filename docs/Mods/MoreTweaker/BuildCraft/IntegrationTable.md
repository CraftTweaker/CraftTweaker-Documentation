# Integration Table

## Package
`moretweaker.buildcraft.IntegrationTable`

## Addition

```zenscript
//moretweaker.buildcraft.IntegrationTable.add(IItemStack output, long mjCost, IIngredient centerStack, IIngredient[] inputs);
moretweaker.buildcraft.IntegrationTable.add(<minecraft:diamond>, 10000, <minecraft:coal>, [<minecraft:dirt>, <minecraft:gravel>]);
```

## Removal

```zenscript
//moretweaker.buildcraft.IntegrationTable.remove(IIngredient centerStack);
moretweaker.buildcraft.IntegrationTable.remove(<minecraft:diamond>);

moretweaker.buildcraft.IntegrationTable.removeAll();
```