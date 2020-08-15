# 世界の変換

## 追加

哲学者の石の世界変異を追加します。オプションのスニーク変異があります。

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// If the IItemStack's do not have a coresponding block, air is used instead.
mods.projecte.WorldTransmutation.add(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// Turn gold blocks into diamond blocks by right clicking, or into iron blocks by sneak right clicking 
mods.projecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.add(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);

// Turn gold blocks into diamond blocks by right clicking, or into iron blocks by sneak right clicking
mods.projecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## 削除

同じ入力、出力、およびsneakOutputを持つ哲学者石の世界変換を削除します。

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
// If the IItemStack's do not have a coresponding block, air is used instead.
mods.projecte.WorldTransmutation.remove(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// Removes the recipe allowing cobblestone to be changed into stone/grass
mods.projecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remove(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);

// Removes the recipe allowing cobblestone to be changed into stone/grass
mods.projecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## すべて削除

このメソッドを呼び出す前にユーザーによって追加されたものを含む、すべての哲学者ストーンワールドの変換を削除します。

```zenscript
mods.projectte.PhiloStone.removeAllWorldTransmutation();
```