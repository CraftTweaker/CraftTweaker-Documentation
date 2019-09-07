# 研钵& 研杵& 咒术尘的配方（Mortar & Pestle & Spell）

### 类

```zenscript
import mods.roots.Mortar;
```

#### 方法

```zenscript
static void addRecipe(
  IItemStack output,   //配方产出的物品。
  IIngredient[] inputs //由配方的成分组成的数组，从1个物品组成到5个物品组成皆可。
);
```

* * *

```zenscript
static void changeSpell(
  string spellName,    // 咒术尘注册表中的咒术尘的名字。
  IIngredient[] inputs // 由新配方中的5个原料所组成的数组。
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