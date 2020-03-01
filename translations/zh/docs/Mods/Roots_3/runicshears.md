### 类

```zenscript
import mods.roots.RunicShears;
```

#### 方法

```zenscript
void addRecipe(
  string name,                 // the name of the recipe being created
  IItemStack outputDrop,       // the item output obtained by performing the shearing
  IItemStack replacementBlock, // the block (as an itemstack) that replaces the block being interacted with upon shearing
  IItemStack inputBlock,       // the block that is to be sheared
  IItemStack jeiDisplayItem    // the item that should be displayed in JEI for this recipe
);
```

* * *

```zenscript
void addEntityRecipe(
  string name,              // the name of the recipe for the shearing
  IItemStack outputDrop,    // the item that is dropped upon shearing the specified entity
  IEntityDefinition entity, // the entity that is to be sheared to obtain the drop
  int cooldown              // the number of ticks (seconds multiplied by 20) it takes until the entity can be sheared again
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // the itemstack output that you wish to remove
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