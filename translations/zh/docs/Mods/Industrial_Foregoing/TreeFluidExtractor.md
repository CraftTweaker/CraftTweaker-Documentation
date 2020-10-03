# Tree Fluid Extractor

### 导入

```zenscript
import mods.industrialforegoing.Extractor;
```

### 添加配方

```zenscript
Extractor.add(IItemStack output, ILiquidStack fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### 移除配方

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```