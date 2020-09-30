### 类

```zenscript
import mods.roots.Mortar;
```

#### 方法

```zenscript
void addRecipe(
  IItemStack output,   // the item output of this recipe
  IIngredient[] inputs // an array of ingredients that is either 5 long or 1 long
);
```

* * *

```zenscript
void changeSpell(
  string spellName,    // the name of the spell as in the spell registry
  IIngredient[] inputs // an array of 5 items that are the new ingredients for the recipe
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack output // the item stack produced by the recipe
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