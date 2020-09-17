### クラス

```zenscript
import mods.roots.Pyre;
```

#### メソッド

```zenscript
void addRecipe(
  string name,         // the name of the recipe being added; if replacing an existing game recipe, ensure the correct name is used
  IItemStack output,   // the output of this recipe
  IIngredient[] inputs // a list of five ingredients (no more, no less)
);
```

* * *

```zenscript
void addRecipe(
  string name,          // the name of the recipe being added; if replacing an existing game recipe, ensure the correct name is used
  IItemStack output,    // the output of this recipe
  IIngredient[] inputs, // a list of five ingredients
  int xp                // the amount of xp in levels that is granted after crafting
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack 出力// 削除するレシピの出力
);
```

* * *

### 使用例

```zenscript
import mods.roots.Pyre;

// Removes the recipes for stalicripe; Note that the quantity is not considered
// when checking if the recipes matches.
Pyre.removeRecipe(<roots:stalicripe>);

// Re-adds the stalicripe using an addition recipe that grants no XP,
// but with considerably greater output
Pyre.addRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// As above, but rewarding 30 levels of experience (calculated from level 0)
Pyre.addRecipe("stalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### メモ

基本アイテムを作成するための正しいレシピをPatchouliが正しく報告していることを確認するために、レシピ名が同じであることを確認するためには、レシピを置き換える際に非常に重要です。

他のすべてのアイテムについては、レシピが何をするかを説明する名前を使用してください。