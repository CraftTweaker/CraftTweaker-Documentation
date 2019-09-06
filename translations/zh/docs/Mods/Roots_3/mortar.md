# 研钵& 研杵& 咒术尘的配方

### 类

```java
import mods.roots.Mortar;
```

#### 方法

```java
static void addRecipe(
  IItemStack output,   //配方产出的物品。
  IIngredient[] inputs //由配方的成分组成的数组，从1个物品组成到5个物品组成皆可。
);
```

* * *

```java
static void changeSpell(
  string spellName,    // the name of the spell as in the spell registry
  IIngredient[] inputs // an array of 5 items that are the new ingredients for the recipe
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
import mods.roots.Mortar;

// Adds a recipe that makes gunpowder out of flint
// As the recipe only has one input, it will automatically
// generate 5 recipes, increasing the number of inputs and
// the quantity of the output respectively.
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