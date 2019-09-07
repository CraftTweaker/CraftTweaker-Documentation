# Sludge Refiner

### 导入

```zenscript
import mods.industrialforegoing.SludgeRefiner;
```

### 添加配方

```zenscript
SludgeRefiner.add(IItemStack output, int ItemWeight);

SludgeRefiner.add(<minecraft:wheat_seeds>, 10);
```

### 移除配方

```zenscript
SludgeRefiner.remove(IItemStack output);

SludgeRefiner.remove(<minecraft:wheat_seeds>);
```