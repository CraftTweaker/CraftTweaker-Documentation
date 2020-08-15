### 所属类名

```zenscript
import mods.roots.Fey;
```

#### 可用方法

```zenscript
无效的 addRecipe(
  字符串名称, // 累计名称; 如果替换现有的配方，肯定要使用相同的名称来确保Patchouli的连续性
  IItemStack输出， // 由此配方
  IIngredient[…]输入// 构成累犯的IIngredients 数组； 必须包含 5 个项目
;
```

* * *

```zenscript
无效的 addRecipe(
  字符串名称, // 累计名称; 如果替换现有的配方，肯定要使用相同的名称来确保Patchouli的连续性
  IItemStack输出， // 由此配方
  IIngredient[…]投入、// 构成累犯的IIngredients 数组； 必须包含 5 个项目
  整数// xp (级别) 以奖励玩家制作这个配方
;
```

* * *

```zenscript
无效的removeRecipe(
  IItemStack 输出 // 你想要删除的
 的配方生产的物品)；
```

* * *

### 例子

```zenscript
import mods.roots.Fey;

// 添加用四个火药和一个红色羊毛合成一个TNT的配方
Fey.addRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// 添加与上文提到的那个配方，并且每次合成时给予玩家6级经验 (从0级-6级的所需的经验值) 
Fey.addRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// 移除活镐的合成配方
Fey.removeRecipe(<roots:living_axe>);

// 添加新的合成配方，务必保持与原配方同名，以确保它能被Patchouli手册展示出来。 默认情况下，所有精灵工匠台的名称与物品的名称相同。
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### 注意

Patchouli手册的正常工作很重要，如果你删除一个默认配方 (例如 `living_axe`，也就是活镐)，如果你想要Patchouli手册正确显示新的配方，你必须用另一个配方替换它，并且给配方名称 `"living_axe"` 。