# Assembly Table

## Package
`moretweaker.buildcraft.AssemblyTable`

## Addition

```zenscript
//moretweaker.buildcraft.AssemblyTable.add(IItemStack output, long mjCost, IIngredient[] inputs);
moretweaker.buildcraft.AssemblyTable.add(<minecraft:diamond>, 10000, [<minecraft:coal>, <minecraft:dirt>]);
```

## Removal

```zenscript
//moretweaker.buildcraft.AssemblyTable.remove(IIngredient output);
moretweaker.buildcraft.AssemblyTable.remove(<buildcraftsilicon:redstone_chipset:0>);

moretweaker.buildcraft.AssemblyTable.removeAll();
```