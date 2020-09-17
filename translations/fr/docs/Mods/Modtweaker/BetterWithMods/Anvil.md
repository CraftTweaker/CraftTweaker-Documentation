# Enclume

L'Anvil est une simple table d'artisanat 4x4 avec les mêmes options.

## Formé

### Ajouter

```zenscript
mods.betterwithmods.Anvil.addShaped(sortie IItemStack, IIngredient[][] entrées);

mods.betterwithmods.Anvil. ddShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]);
```

### Retirer

```zenscript
mods.betterwithmods.Anvil.removeShaped(IItemStack output, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[[<minecraft:stone>]]);

```

## Sans forme

### Ajouter

```zenscript
mods.betterwithmods.Anvil.addShapeless(sortie IItemStack, IIngredient[] entrées);

mods.betterwithmods.Anvil. ddShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

### Retirer

```zenscript
mods.betterwithmods.Anvil.removeShapeless(sortie IItemStack, @Optional IIngredient[] inputs);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil. emoveShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);

mods etterwithmods.Anvil.removeAll();
```