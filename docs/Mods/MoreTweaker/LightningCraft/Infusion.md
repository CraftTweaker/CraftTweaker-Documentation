# Lightning Infusion

## Package
`moretweaker.lightningcraft.LightningInfusion`

## Addition

```zenscript
//moretweaker.lightningcraft.LightningInfusion.add(IItemStack output, IIngredient catalyst, int requiredLE, IIngredient[] inputs);
moretweaker.lightningcraft.LightningInfusion.add(<minecraft:diamond>, <minecraft:iron_ingot>, 25, [<minecraft:coal>, <minecraft:dirt>, <minecraft:coal>, <minecraft:dirt>]);
```

## Removal

```zenscript
//moretweaker.lightningcraft.LightningInfusion.remove(IIngredient output);
moretweaker.lightningcraft.LightningInfusion.remove(<minecraft:diamond>);

moretweaker.lightningcraft.LightningInfusion.removeAll();
```