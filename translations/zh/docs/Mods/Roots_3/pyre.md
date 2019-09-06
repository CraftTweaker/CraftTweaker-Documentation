# 柴堆仪式（Pyre）配方

### 类

```java
import mods.roots.Pyre;
```

#### 方法

```java
static void addRecipe(
  string name,         // 这个配方的名字，如果它取代了一个已有的配方，请确保当前的名字已被使用。
  IItemStack output,   //这个配方的产物。
  IIngredient[] inputs //由这个配方所需的5个原料所组成的数组(不能多，也不能少)。
);
```

* * *

```java
static void addRecipe(
  string name,          // the name of the recipe being added; if replacing an existing game recipe, ensure the correct name is used
  IItemStack output,    // the output of this recipe
  IIngredient[] inputs, // a list of five ingredients
  int xp                // the amount of xp in levels that is granted after crafting
);
```

* * *

```java
static void removeRecipe(
  IItemStack output //所移除的配方产物。
);
```

* * *

### 例子

```java
import mods.roots.Pyre;

// 移除合成配方，就像下方语句提到的石笋；
// 注意：在检测配方是否匹配的时候不需要提及产物数量。
Pyre.removeRecipe(<roots:stalicripe>);

// 重新添加另一个没有奖励经验的配方 ，
// 虽然如此，但是产物是非常可观的。
Pyre.addRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// 添加一个和上方语句一样的配方，并且奖励 30级的经验(从零级开始算起)。
Pyre.addRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### 注意

在取代一个配方的时候，确保配方名字一致时极其重要的，这能确保Patchouli手册 mod能够正常地显示配方的原材料。

对于其他的配方，请使用能够描述出你配方的用途的名字。