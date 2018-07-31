# 树液提取器（Tree Fluid Extractor）

### 导入

```
import mods.industrialforegoing.Extractor;
```

### 添加

```
Extractor.add(IItemStack output, ILiquidStack fluid);
//output 输出
//fluid 输出流体

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### 移除

```
Extractor.remove(IItemStack output);
//output 输出

Extractor.remove(<minecraft:cobblestone>);
```
