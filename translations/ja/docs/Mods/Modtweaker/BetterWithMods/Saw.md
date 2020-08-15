# <unk>

## 基本的なレシピ

* ソーレシピを追加する - 入力 ** は、ソーレシピに関連付けられたブロックを持たなければなりません。

```zenscript
mods.betterwithmods.Saw.add(IIngredient input, IItemStack[] output);
//Examples
mods.betterwithmods.Saw.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## 入力による削除

* 入力材料に基づいてレシピを削除

```zenscript
mods.betterwithmods.Saw.remove(IIngredient input);
```

## 出力による削除

* 出力に基づいてレシピを削除

```zenscript
mods.betterwithmods.Saw.remove(IItemStack[] outputs);
```

## すべて削除

* すべてのレシピを削除

```zenscript
mods.betterwithmods.Saw.removeAll();
```

## ビルダー

こぎりにはレシピビルダーがあります。 ノコギリの性質上、現在は特別なビルダーのメソッドを持っていないので、私はそれをノンゼロで文書化します。

* 新しいソウビルダーを作成します。 `mods.betterwithmods.Saw.builder()`

* ソーの方法
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### ビルダーの使用例

    mods.betterwithmods.Saw.builder()
    .buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
    .build();