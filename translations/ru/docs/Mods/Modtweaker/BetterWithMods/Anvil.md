# Наковальня

Anvil - это простой верстак 4x4 с теми же настройками.

## Форма

### Сложение

```zenscript
mods.betterwithmods.Anvil.addShaped(IItemStack, IIngredient[][] входов);

mods.betterwithmods.Anvil. ddShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]);
```

### Удаление

```zenscript
mods.betterwithmods.Anvil.removeShaped(IItemStack output, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[[<minecraft:stone>]);

```

## Бесформенный

### Сложение

```zenscript
mods.betterwithmods.Anvil.addShapeless(IItemStack, IIngredient[] входов);

mods.betterwithmods.Anvil. ddShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

### Удаление

```zenscript
mods.betterwithmods.Anvil.removeShapeless(IItemStack output, @Optional IIngredient[] inputs);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil. emoveShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);

модов. etterwithmods.Anvil.removeAll();
```