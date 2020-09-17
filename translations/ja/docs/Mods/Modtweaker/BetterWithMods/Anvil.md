# 金床

金床は、同じオプションを備えたシンプルな4×4の作業台です。

## 形状

### 加算

```zenscript
mods.betterwithmods.Anvil.addShaped(IItemStack output, IIngredient[][] inputs);

mods.betterwithmods.Anvil.addShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]);
```

### 削除

```zenscript
mods.betterwithmods.Anvil.removeShaped(IItemStack 出力, @Optional IIngredient[][] inputs);

mods.betterwithmods.Anvil.removeShaped()<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>,[<minecraft:stone>]);

```

## Shapeless

### 加算

```zenscript
mods.betterwithmods.Anvil.addShapeless(IItemStack output, IIngredient[] inputs);

mods.betterwithmods.Anvil.addShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);
```

### 削除

```zenscript
mods.betterwithmods.Anvil.removeShapeless(IItemStack output, @Optional IIngredient[] inputs);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
]);

mods.betterwithmods.Anvil.removeAll();
```