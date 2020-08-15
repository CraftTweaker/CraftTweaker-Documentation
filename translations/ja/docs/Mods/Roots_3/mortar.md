### クラス

```zenscript
import mods.roots.Mortar;
```

#### メソッド

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
  IItemStack 出力 // レシピによって生成されたアイテムスタック
);
```

* * *

### 使用例

```zenscript
import mods.roots.Mortar;

// Adds a recipe that makes gunpowder out of flint
// As the recipe only has one input, it will automatically
// generate 5 recipes, increasing the number of inputs and
// the quantity of the output respectively.
Mortar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

// このレシピは、1つのベッドを作るために5つの成分を使用します。
Mortar.addRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// This will remove all recipes that have Root's flour as an output
// including any multi-ingredient recipes
Mortar.removeRecipe(<roots:flour>);

// This will change the recipe for the grove supplication spell to
// simply require five pieces of sugar.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```