# 树皮配方（Bark）

### 类

```java
import mods.roots.Bark;
```

#### 方法

```java
static void addRecipe(
  string name,        //配方的名称
  IItemStack woodLog, //被挖树皮的原木的物品id
  IItemStack bark     //这个原木出产的树皮的物品id
);
```

* * *

### 例子

```java
import mods.roots.Bark;

//注意：当前在该方法中物品的产出数量被忽略，
//并且物品产出的数量和小刀的时运等级有关。
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>);
```

### 注意

并没有移除树皮配方以及小刀->树皮的方法存在。