# Kowadło

Kowadło jest prostym stołem rzemieślniczym 4x4 z tymi samymi opcjami.

## Kształtowane

### Dodanie

```zenscript
mods.betterwithmods.Anvil.addShaped(wyjście IItemStack, IIngredient[][] wejścia);

mods.betterwithmods.Anvil. ddShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]);
```

### Usuwanie

```zenscript
mods.betterwithmods.Anvil.removeShaped(wyjście IItemStack, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[[<minecraft:stone>]]);

```

## Bezkształtne

### Dodanie

```zenscript
mods.betterwithmods.Anvil.addShapeless(wyjście IItemStack, IIngredient[] wejścia);

mods.betterwithmods.Anvil. ddShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

### Usuwanie

```zenscript
mods.betterwithmods.Anvil.removeShapeless(wyjście IItemStack, @Optional IIngredient[] inputs);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil. emoveShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);

modów. etterwithmods.Anvil.removeAll();
```