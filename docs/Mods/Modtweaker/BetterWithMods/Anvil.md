# Anvil

The Anvil is a simple 4x4 Crafting Table with the same options.

## Shaped

### Addition
```
mods.betterwithmods.Anvil.addShaped(IItemStack output, IIngredient[][] inputs);

mods.betterwithmods.Anvil.addShaped(<minecraft:dirt>, [
   [<minecraft:stone>,<minecraft:stone>,<minecraft:stone>,<minecraft:stone>],
   [<minecraft:stone>,<minecraft:stone>,<minecraft:stone>,<minecraft:stone>],
   [<minecraft:stone>,<minecraft:stone>,<minecraft:stone>,<minecraft:stone>],
   [<minecraft:stone>,<minecraft:stone>,<minecraft:stone>,<minecraft:stone>]
]);
```

### Removal

```
mods.betterwithmods.Anvil.removeShaped(IItemStack output, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[[<minecraft:stone>]]);

```

## Shapeless 

### Addition

```
mods.betterwithmods.Anvil.addShapeless(IItemStack output, IIngredient[] inputs);

mods.betterwithmods.Anvil.addShapeless(<minecraft:dirt>, [
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>
]);
```

### Removal

```
mods.betterwithmods.Anvil.removeShapeless(IItemStack output, @Optional IIngredient[] inputs);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>, [
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,
<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>,<minecraft:dirt>
]);
```


