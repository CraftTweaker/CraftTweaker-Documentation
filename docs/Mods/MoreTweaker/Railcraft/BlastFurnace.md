# Blast Furnace

## Package
`moretweaker.railcraft.BlastFurnace`

## Addition

```zenscript
//moretweaker.railcraft.BlastFurnace.add(IItemStack output, IIngredient input, optional int ticks, optional int slag);
moretweaker.railcraft.BlastFurnace.add(<minecraft:leather>, <minecraft:rotten_flesh>, 600, 2);
```

## Removal

```zenscript
//moretweaker.railcraft.BlastFurnace.remove(IIngredient output);
moretweaker.railcraft.BlastFurnace.remove(<ore:ingotSteel>);

moretweaker.railcraft.BlastFurnace.removeAll();
```