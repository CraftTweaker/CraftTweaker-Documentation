# StokedCrucible

## Addition 

```
mods.betterwithmods.StokedCrucible.add(IItemStack input, @Optional IItemStack secondaryOutput, IIngredient[] inputs);

mods.betterwithmods.StokedCrucible.add(<minecraft:dirt>,<minecraft:dirt:1>,[<minecraft:stone>]);

mods.betterwithmods.StokedCrucible.add(<minecraft:dirt>,[<minecraft:stone>]);

```

## Removal

``` 

mods.betterwithmods.StokedCrucible.remove(IItemStack output);
mods.betterwithmods.StokedCrucible.remove(IItemStack output, IItemStack secondary);
mods.betterwithmods.StokedCrucible.remove(IItemStack output, @NotNull IIngredient[] inputs, IItemStack secondary);
//Deprecated and will be removed in 1.13
mods.betterwithmods.StokedCrucible.remove(IItemStack output, IItemStack secondary, @NotNull IIngredient[] inputs);


mods.betterwithmods.StokedCrucible.remove(<minecraft:dirt>);
mods.betterwithmods.StokedCrucible.remove(<minecraft:iron_ingot>, <iron_nugget>);
mods.betterwithmods.StokedCrucible.remove(<minecraft:stone>, [<minecraft:cobblestone>], null);
mods.betterwithmods.StokedCrucible.remove(<minecraft:stone>, null, [<minecraft:cobblestone>]);

```