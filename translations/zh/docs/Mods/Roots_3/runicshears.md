### 类

```zenscript
import mods.roots.RunicShears;
```

#### 方法

```zenscript
无效 addRecipe(
  字符串名称 // 正在创建的配方名称
  IItemStack 输出Drop， // 通过执行跳跃
  IItemStack 替换块获得的项目输出 // 方块（作为物品堆栈）替换被切断时被互动的方块
  IItemStack inputBlock, // 将会羊皮的方块
  IItemStack jeiDisplayitem // 应该显示在JEI 中的该配方
);
```

* * *

```zenscript
无效 addEntityRecipe(
  字符串名称 // 剪切的配方
  IItemStack 输出的名称 // 跳过指定实体时丢弃的项目
  IEntity定义实体 // 该实体若要获得掉期
  整形冷却// 它所需的秒数 (秒乘以20)，直到该实体能够再次皮肤
;
```

* * *

```zenscript
无效的 removeRecipe(
  IItemStack 输出 // 您想要删除
 的物品堆栈输出);
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