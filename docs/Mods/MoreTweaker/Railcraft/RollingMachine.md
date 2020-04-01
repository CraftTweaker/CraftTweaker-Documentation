# Rolling Machine

## Package
`moretweaker.railcraft.RollingMachine`

## Addition

```zenscript
//moretweaker.railcraft.RollingMachine.addShaped(IItemStack output, IIngredient[][] inputs, optional int ticks);
moretweaker.railcraft.RollingMachine.addShaped(<minecraft:diamond>, [[<minecraft:coal>, <minecraft:dirt>],[<minecraft:dirt>, <minecraft:coal>]], 600);

//moretweaker.railcraft.RollingMachine.addShapeless(IItemStack output, IIngredient[] inputs, optional int ticks);
moretweaker.railcraft.RollingMachine.addShapeless(<minecraft:diamond>, [<minecraft:coal>, <minecraft:dirt>, <minecraft:cobblestone>]);
```

## Removal

```zenscript
//moretweaker.railcraft.RollingMachine.remove(IIngredient output);
moretweaker.railcraft.RollingMachine.remove(<minecraft:rail>);

moretweaker.railcraft.RollingMachine.removeAll();
```