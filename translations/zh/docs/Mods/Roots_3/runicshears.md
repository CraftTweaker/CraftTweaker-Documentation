# 符文剪刀 (方块 & 实体)

### 类

```zenscript
import mods.roots.RunicShears;
```

#### 方法

```zenscript
static void addRecipe(
  string name,                 //创建的配方的名称。
  IItemStack outputDrop,       //通过剪刀剪切获得的产物。
  IItemStack replacementBlock, //剪切后的替代方块 (以itemstack，也就是物品堆格式) 
  IItemStack inputBlock,       //被剪刀剪切的方块。
  IItemStack jeiDisplayItem    //这个配方中被展示在JEI上的物品。
);
```

* * *

```zenscript
static void addEntityRecipe(
  string name,              //剪切配方的名字
  IItemStack outputDrop,    //剪切特定生物掉落的物品。
  IEntityDefinition entity, //剪切后掉落该掉落物的生物。
  int cooldown              // 实体经历一次剪切后能够再次被剪切所花的tick 数(秒数*20) 。
);
```

* * *

```zenscript
static void removeRecipe(
  IItemStack output //你希望移除的配方的产物。
);
```

* * *

### 例子

```zenscript
import mods.roots.RunicShears;

//创建一个通过剪切红色地狱砖块获得地狱疣的配方，
//并且红石地狱砖块将会变回普通的地狱砖块。
RunicShears.addRecipe("nether_wart_block", <minecraft:nether_wart>*2, <minecraft:nether_brick>, <minecraft:red_nether_brick>, <minecraft:red_nether_brick>);

//创建一个通过鸡获得鸡蛋的配方，并且这个配方有2分钟的冷却时间。
RunicShears.addEntityRecipe("egg_from_chicken", <minecraft:egg>*2, <entity:minecraft:chicken>, 120*20);

//移除所有获得精灵皮革的配方 (不管是通过生物还是方块)。 
RunicShears.removeRecipe(<roots:fey_leather>);
```

### 注意

`removeRecipe`方法将会尝试移除所有包含这个产物的配方 (包括剪切生物和剪切方块)。