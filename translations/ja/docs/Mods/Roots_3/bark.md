### クラス

```zenscript
import mods.roots.Bark;
```

#### メソッド

```zenscript
void addRecipe(
  string name,        // the name of the recipe
  IItemStack woodLog, // the itemstack equivalent of the wood log being broken
  IItemStack bark     // the itemstack of the type of bark this log produces (including stack count)
);
```

* * *

```zenscript
void removeRecipe(
  IItemStack 樹皮/削除する樹皮の型のitemstack (スタックサイズを除く)
);
```

* * *

### 使用例

```zenscript
import mods.roots.Bark;

// Will produce 2 sand from a mon block breaked by a nife.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// デフォルトのリストからワイルドウッドの樹皮を削除します。
Bark.removeRecipe(<roots:bark_wildwood>);
```