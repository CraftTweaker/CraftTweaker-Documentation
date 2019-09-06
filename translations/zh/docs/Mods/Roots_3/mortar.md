# 研钵& 研杵& 守门者之杖的配方

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

// This will remove all recipes that have Root's flour as an output
// including any multi-ingredient recipes
Mortar.removeRecipe(<roots:flour>);

// This will change the recipe for the grove supplication spell to
// simply require five pieces of sugar.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```