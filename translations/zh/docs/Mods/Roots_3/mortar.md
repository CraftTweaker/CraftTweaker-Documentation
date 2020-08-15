### 类

```zenscript
import mods.roots.Mortar;
```

#### 方法

```zenscript
无效 addRecipe(
  IItemStack 输出, // 此配方
  IIngredient[…]输入// 一个5长或1长的成份数组

```

* * *

```zenscript
无效更改拼写(
  字符串拼写名称， // 拼写注册表中拼写的名称
  IIngredient[…]输入// 五个项目的数组，这些是配方的新成分
)；
```

* * *

```zenscript
无效的removeRecipe(
  IItemStack 输出 // 配方
 生产的物品堆栈)；
```

* * *

### 例子

```zenscript
import mods.roots.Mortar;

// 添加一个用燧石制成火药的配方。
// 因为这个配方只有一个原料，
// 它将自动生成5个配方，
// 分别增加投入原料和产出产物的数量
Mortar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

//这个配方将使用5个相同原料（也就是羊毛）来制成一张床。
Mortar.addRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// 这条语句将会移除Roots（根源魔法）mod面粉的配方，
// 包括所有合成它的多原料的配方。
Mortar.removeRecipe(<roots:flour>);

// 这条语句将会更改带有格鲁夫祈愿效果的咒术尘的配方，
// 使其简化到只需五份糖就能合成
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```