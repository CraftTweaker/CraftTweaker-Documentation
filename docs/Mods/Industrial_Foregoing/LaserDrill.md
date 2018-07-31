# 镭射钻（Laser Drill）

### 导入

```
import mods.industrialforegoing.LaserDrill;
```

### 添加

```
LaserDrill.add(int itemLensMetaColor, IItemStack output, int ItemWeight);
//itemLensMetaColor 适合的透镜片颜色
//output 输出
//itemWeight 物品权重

LaserDrill.add(1, <minecraft:stone>, 10);
```

### 移除

```
LaserDrill.remove(IItemStack output);
//output 输出

LaserDrill.remove(<minecraft:stone>);
```
