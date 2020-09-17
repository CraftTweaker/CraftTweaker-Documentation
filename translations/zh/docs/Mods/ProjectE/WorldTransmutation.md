# 世界变换

## 添加

添加一个Philosopher Stone世界的传输，可选的潜水点击传播。

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
/ 如果IItemStack没有焦炭块，则使用空气。
mods.projecte.WorldTransmutation. d(StemStack 输出, IItemStack 输入, @Optional IItemStack sneakOutput);

// 通过右键将金块变成钻石块，或通过右键点击 
模式变成铁块。 rojecte.WorldTransmutation.add(<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation. dd(IBlockState output, IBlockState input, @Optional IBlockState sneakOut)；

// 通过右键将金块变成钻石块，或通过右键点击
模式变成铁块。 rojecte.WorldTransmutation.add(<blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, <blockstate:minecraft:iron_block>);
```

## remove #移除

移除具有相同输入、输出和sneakOutput的Philosopher Stone世界转换器。

### [IItemStack](/Vanilla/Items/IItemStack/)

```zenscript
/ 如果IItemStack没有焦炭块，则使用空气。
mods.projecte.WorldTranstransverve(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);

// 移除允许cobblestone 更改为stone/grass
mods的配方。 rojecte.WorldTransmutation.remove(<minecraft:stone>, <minecraft:cobblestone>, <minecraft:grass>);
```

### [IBlockState](/Vanilla/Blocks/IBlockState/)

```zenscript
mods.projecte.WorldTransmutation.remutation.remove(IBlockState output, IBlockState input, @Optional IBlockState sneakOutput);

// 移除允许cobblestone 更改为stone/grass
mods的配方。 rojecte.WorldTransmutation.remove(<blockstate:minecraft:stone>, <blockstate:minecraft:cobblestone>, <blockstate:minecraft:grass>); 
```

## 全部移除

移除所有Philosopher Stone世界的传输，包括用户在通话之前添加的传输。

```zenscript
mods.projecte.PhiloStone.removeAllWorldTransmutation();
```