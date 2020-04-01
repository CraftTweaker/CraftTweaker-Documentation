# Rock Crusher

## Package
`moretweaker.railcraft.RockCrusher`

## Addition

```zenscript
//moretweaker.railcraft.RockCrusher.add(IIngredient input, IItemStack[] outputs, float[] chances, optional int ticks);
//The chances array must have the same length as the outputs array. The chance for output[0] to appear is in chances[0] ...
//A chabce of 1 is equal to 100%
moretweaker.railcraft.RockCrusher.add(<minecraft:diamond>, [<minecraft:coal>, <minecraft:dirt>], [0.95, 0.25]);
```

## Removal

```zenscript
//moretweaker.railcraft.RockCrusher.remove(IIngredient output);
moretweaker.railcraft.RockCrusher.remove(<minecraft:cobblestone>);

moretweaker.railcraft.RockCrusher.removeAll();
```