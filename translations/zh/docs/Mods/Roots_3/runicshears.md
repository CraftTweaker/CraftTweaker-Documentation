# 符文剪刀 (方块 & 实体)

### 类

```java
import mods.roots.RunicShears;
```

#### 方法

```java
static void addRecipe(
  string name,                 //创建的配方的名称。
  IItemStack outputDrop,       //通过剪刀剪切获得的产物。
  IItemStack replacementBlock, //剪切后的替代方块 (以itemstack，也就是物品堆格式) 
  IItemStack inputBlock,       //被剪刀剪切的方块。
  IItemStack jeiDisplayItem    //这个配方中被展示在JEI上的物品。
);
```

* * *

```java
static void addEntityRecipe(
  string name,              //剪切配方的名字
  IItemStack outputDrop,    //剪切特定生物掉落的物品。
  IEntityDefinition entity, //剪切后掉落该掉落物的生物。
  int cooldown              // 实体经历一次剪切后能够再次被剪切所花的tick 数(秒数*20) 。
);
```

* * *

```java
static void removeRecipe(
  IItemStack output //你希望移除的配方的产物。
);
```

* * *

### 例子

```java
import mods.roots.RunicShears;

// Creates a recipe that obtains nether wart from red nether bricks
// and then converts the bricks into normal nether bricks
RunicShears.addRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

// Creates a recipe that obtains eggs from chickens with a 2 minute cooldown
RunicShears.addEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

// Removes all recipes (both entity & block) that give fey leather
RunicShears.removeRecipe(<roots:fey_leather>);
```

### 注意

Note that the `removeRecipe` function will attempt to remove any recipe (both runic shearing of blocks and of entities) that matches the desired output.