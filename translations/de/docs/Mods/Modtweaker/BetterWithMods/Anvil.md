# Amboss

Der Amboss ist ein einfacher 4x4 Werktisch mit den gleichen Optionen.

## Form

### Addition

```zenscript
mods.betterwithmods.Anvil.addShaped(IItemStack Ausgabe, IIngredient[][] Eingänge);

mods.betterwithmods.Anvil. ddShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]);
```

### Entfernen

```zenscript
mods.betterwithmods.Anvil.removeShaped(IItemStack Output, @Optionale IIngredient[][] Eingänge);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[[<minecraft:stone>]]);

```

## Shapeless

### Addition

```zenscript
mods.betterwithmods.Anvil.addShapeless(IItemStack Output, IIngredient[] Eingänge);

mods.betterwithmods.Anvil. ddShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

### Entfernen

```zenscript
mods.betterwithmods.Anvil.removeShapeless(IItemStack Output, @Optionale IIngredient[] Eingänge);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil. emoveShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);

Mods. etterwithmods.Anvil.removeAll();
```