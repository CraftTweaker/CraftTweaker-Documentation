# Laser Drill

### 导入

```zenscript
import mods.industrialforegoing.LaserDrill;
```

### 添加配方

```zenscript
LaserDrill.add(int itemLensMetaColor, IItemStack output, int ItemWeight);

LaserDrill.add(1, <minecraft:stone>, 10);
```

### 移除配方

```zenscript
LaserDrill.remove(IItemStack output);

LaserDrill.remove(<minecraft:stone>);
```