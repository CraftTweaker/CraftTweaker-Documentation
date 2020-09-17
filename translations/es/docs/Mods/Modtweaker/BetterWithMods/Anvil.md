# Yunque

El yunque es una simple mesa de creación 4x4 con las mismas opciones.

## Forjado

### Adicional

```zenscript
mods.betterwithmods.Anvil.addShaped(salida IItemStack, entradas IIngredient[][]);

mods.betterwithmods.Anvil. ddShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]);
```

### Eliminar

```zenscript
mods.betterwithmods.Anvil.removeShaped(IItemStack output, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[[<minecraft:stone>]]);

```

## Sin forma

### Adicional

```zenscript
mods.betterwithmods.Anvil.addShapeless(salida ItemStack, entradas IIngredient[]);

mods.betterwithmods.Yvil. ddShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

### Eliminar

```zenscript
mods.betterwithmods.Anvil.removeShapeless(salida IItemStack, @entradas IIngredient[]);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil. emoveShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);

mods. etterwithmods.Anvil.removeAll();
```