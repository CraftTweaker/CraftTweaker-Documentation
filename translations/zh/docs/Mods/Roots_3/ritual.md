# 修改柴堆仪式（Pyre Ritual）配方

### 类

```zenscript
import mods.roots.Ritual;
```

#### 方法

```zenscript
static void modifyRitual(
  string name,         // 你希望修改的柴堆仪式的名称。
  IIngredient[] inputs // 由5种仪式原料构成的数列 (不能多，也不能少)。
);
```

* * *

### 例子

```zenscript
import mods.roots.Ritual;

// 更改展开仪式：风之墙所需的原料。
Ritual.modifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```