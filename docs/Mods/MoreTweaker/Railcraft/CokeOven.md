# Coke Oven

## Package
`moretweaker.railcraft.CokeOven`

## Addition

```zenscript
//moretweaker.railcraft.CokeOven.add(IItemStack output, IIngredient input, ILiquidStack liquidOutput, optional int ticks);
moretweaker.railcraft.CokeOven.add(<minecraft:leather>, <minecraft:rotten_flesh>, <liquid:water> * 10, 300);
```

## Removal

```zenscript
//moretweaker.railcraft.CokeOven.remove(IIngredient output);
moretweaker.railcraft.CokeOven.remove(<ore:fuelCoke>);

moretweaker.railcraft.CokeOven.removeAll();
```