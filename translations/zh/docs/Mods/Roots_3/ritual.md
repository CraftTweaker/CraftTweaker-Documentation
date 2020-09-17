### 类

```zenscript
import mods.roots.Ritual;
```

#### 方法

```zenscript
无效的修饰符(
  字符串名称 // 您希望修改其成分的
  IIngredient[输入// 五个成分的列表(不再多于) 不少
)；
```

* * *

### 例子

```zenscript
import mods.roots.Ritual;

// 更改展开仪式：风之墙所需的原料。
Ritual.modifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```