# 精灵工匠台

### 类

```java
import mods.roots.Fey;
```

#### 方法

```java
static void addRecipe(
  string name,         //配方的名称；如果取代了一个配方， 务必确保它们拥有相同的名称，从而确保Patchouli手册Mod能正常工作。
  IItemStack output,   //配方产物的物品id。
  IIngredient[] inputs // 一个由配方中所有物品组成的数组；这个配方必须拥有5个物品。
);
```

* * *

```java
static void addRecipe(
  string name,          // 配方的名称；如果取代了一个配方， 务必确保它们拥有相同的名称，从而确保Patchouli手册Mod能正常工作。
  IItemStack output,    // 配方产物的物品id。
  IIngredient[] inputs, // 一个由配方中所有物品组成的数组；这个配方必须拥有5个物品。
  int xp                // 合成后奖励给玩家的经验值(以等级作为单位)。
);
```

* * *

```java
static void removeRecipe(
  IItemStack output //你希望移除的配方的产物
);
```

* * *

### 例子

```java
import mods.roots.Fey;

// Adds a recipe for TNT using 4 gunpowder and red wool
Fey.addRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// Adds the above recipe but also grants the player 6 levels (from 0-6 relatively) every time it is crafted
Fey.addRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// Removes the recipe for the living axe
Fey.removeRecipe(<roots:living_axe>);

// Adds a different recipe for the living axe, using the same name, to ensure that it shows up in Patchouli. 默认情况下，所有精灵工匠台的名称与物品的名称相同。
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### 注意

Patchouli手册的正常工作很重要，如果你删除一个默认配方 (例如 `living_axe`，也就是活镐)，如果你想要Patchouli手册正确显示新的配方，你必须用另一个配方替换它，并且给配方名称 `"living_axe"` 。