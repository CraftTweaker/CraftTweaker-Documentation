# 铁道体

铁道是一个简单的 4x4 制造桌，具有相同的选项。

## 形状：

### 加

```zenscript
mods.betterwithmods.Anvil.addShaped(IItemStack output, IIngredient[] inputs);

mods.betterwithmods.Anvil. ddShaped(<minecraft:dirt>, [
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>],
   [<minecraft:stone>, <minecraft:stone>, <minecraft:stone>, <minecraft:stone>]
]);
```

### 移除

```zenscript
mods.betterwithmods.Anvil.removeShaped(IItemStack output, @Optional IIngredient[] inputs;

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>);

mods.betterwithmods.Anvil.removeShaped(<minecraft:dirt>[<minecraft:stone>]]);

```

## 无形的

### 加

```zenscript
mods.betterwithmods.Anvil.addShapeless(IItemStack output, IIngredient[…]输入)；

mods.betterwithmods.Anvil。 ddShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
];
```

### 移除

```zenscript
mods.betterwithmods.Anvil.removeShapeless(IItemStack output, @Optional IIngredient[……]输入)；

mods.betterwithmods.Anvil.removeShapeless(<minecraft:dirt>);

mods.betterwithmods.Anvil. EmoveShapeless(<minecraft:dirt>, [
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>,
<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>
];

模组。 etterwithmods.Anvil.removeAll();
```