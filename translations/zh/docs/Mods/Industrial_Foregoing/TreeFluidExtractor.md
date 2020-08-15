# 树流体提取器

### 导入

```zenscript
1. 进口模式.工业前沿.提取器；
```

### 添加配方

```zenscript
Extractor.add(ItemStack 输出, ILiquidStack 流量);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> *3);
```

### 移除配方

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```