### クラス

```zenscript
import mods.roots.Transmutation;
```

#### メソッド

```zenscript
void removeRecipe(
  string name // 削除されているレシピの名前
);
```

* * *

```zenscript
void addBlockToBlockRecipe(
  string name,        // the name of the recipe being added (must be unique)
  IBlockState state1, // the initial state of the block as defined as a blockstate
  IBlockState state2  // the state that the initial state should be converted into
);
```

* * *

```zenscript
void addBlockToItemRecipe(
  string name,       // the name of the recipe being added (must be unique)
  IBlockState state, // the initial state that is looked for when converting (as a block state)
  IItemStack stack   // the item stack that replaces the block state
);
```

* * *

### 使用例

```zenscript
import mods.roots.Transmutation;

// Removes the default pumpkin-over-water-to-melon recipe
Transmutation.removeRecipe("pumpkin_melon");

// Adds a recipe which converts end stone into bone blocks
Transmutation.addBlockToBlockRecipe("end_stone_to_bone", <blockstate:minecraft:end_stone>, <blockstate:minecraft:bone_block:axis=y>);

// Adds a recipe which converts default tallgrass into snowballs
Transmutation.addBlockToItemRecipe("tallgrass_to_snowball", <blockstate:minecraft:tallgrass:type=tall_grass>, <minecraft:snowball>*3);
```

### メモ

**注:複雑な状態関数は、CraftTweaker(すなわち、周囲をチェックする)を介して現在acessibleではありません。**

F3デバッグ機能を使用してターゲティングすることで、ブロックとそのバリエーションと状態に関する情報を見つけることができます。 画面の右側には、ブロックのレジストリ名が表示され、その下の任意の状態が表示されます。

例えば、 `bone_block` は以下のようになります。

    軸: y

This can be converted into a blockstate by replacing the `:` with `=` like so: `axis=y`, meaning that the final blockstate (for an upwards facing bone block) would be `<blockstate:minecraft:bone_block:axis=y>`.