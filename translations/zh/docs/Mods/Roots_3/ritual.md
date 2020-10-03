### 类

```zenscript
import mods.roots.Ritual;
```

#### 方法

```zenscript
void modifyRitual(
  string name,         // the name of the ritual whose ingredients you wish to modify
  IIngredient[] inputs // a list of five ingredients (no more, no less)
);
```

* * *

### 例子

```zenscript
import mods.roots.Ritual;

// 更改展开仪式：风之墙所需的原料。
Ritual.modifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```