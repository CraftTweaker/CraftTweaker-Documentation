# 树皮配方

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

// Note that quantities on the output are currently ignored and the
// number of items produced is relative to your fortune level.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>);
```

### Notes

No functionality exists for removing bark recipes or the knife->bark functionality.