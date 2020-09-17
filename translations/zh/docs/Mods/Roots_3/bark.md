### 类

```zenscript
import mods.roots.Bark;
```

#### 方法

```zenscript
无效的 addRecipe(
  字符串名称, // 配方
  IItemStack 木材日志的名称, // 等于木材记录的项目堆栈被损坏
  IItemStack bark / / 该记录产生的树皮类型的项目堆栈(包括堆栈数量)

```

* * *

```zenscript
无效删除Recipe(
  IItemStack bark // 要删除的树皮类型的项目堆栈(不包括堆栈大小)
)；
```

* * *

### 例子

```zenscript
导入 mods.roots.Bark;

// 将从一个被刀破坏的熔岩块中生成 2 sand
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// 从默认列表
Bark.removeRecipe(<roots:bark_wildwood>);
```