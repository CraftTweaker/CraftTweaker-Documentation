# StokedCrucible

## Addition 

```
mods.betterwithmods.StokedCrucible.add(IItemStack input, @Optional IItemStack secondaryOutput, IIngredient[] inputs);

mods.betterwithmods.StokedCrucible.add(<minecraft:dirt>,<minecraft:dirt:1>,[<minecraft:stone>]);

mods.betterwithmods.StokedCrucible.add(<minecraft:dirt>,[<minecraft:stone>]);

```

## Removal

``` 
mods.betterwithmods.StokedCrucible.remove(IItemStack output, @Optional IIngredient[] inputs);

mods.betterwithmods.StokedCrucible.remove(IItemStack output, @Optional IItemStack secondaryOutput);

mods.betterwithmods.StokedCrucible.remove(<minecraft:dirt>,[<minecraft:stone>]);

mods.betterwithmods.StokedCrucible.remove(<minecraft:dirt>);

```