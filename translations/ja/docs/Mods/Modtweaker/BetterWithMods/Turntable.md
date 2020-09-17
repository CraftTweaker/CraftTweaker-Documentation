# ターンテーブル

## 基本的なレシピ

* ターンテーブルレシピを追加する - 入力 ** は、それらに関連付けられているブロックを持たなければなりません。 製品の状態は、レシピが終了した後に配置されるブロックです。

```zenscript
mods.betterwithmods.Turntable.add(IIngredient input, IItemStack productState, IItemStack[] output);

mods.betterwithmods.Turntable.add(IIngredient input, IItemStack[] output);

//Examples
mods.betterwithmods.Turntable.add(<minecraft:grass>, <minecraft:dirt>, [<minecraft:seed>]);

mods.betterwithmods.Turntable.add(<minecraft:gravel>, [<minecraft:flint>]);
```

## 入力による削除

* 入力材料に基づいてレシピを削除

```zenscript
mods.betterwithmods.Turntable.remove(IIngredient入力);
```

## 出力による削除

* 出力に基づいてレシピを削除

```zenscript
mods.betterwithmods.Turntable.remove(IItemStack[] outputs);
```

## すべて削除

* すべてのレシピを削除

```zenscript
mods.betterwithmods.Turntable.removeAll();
```

## 製品で削除

* productState によるレシピの削除 

```zenscript
mods.betterwithmods.Turntable.removeRecipe(IItemStack productState);
```

## ビルダー

The Turntable has a recipe builder that allows more precise control over the recipes. 以前のすべてのメソッドはビルダーの使用に単純に短縮されます。

* 新しいターンテーブルビルダーを作成します。 `mods.betterwithmods.Turntable.builder()`

* ターンテーブルメソッド
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * レシピの終了に必要な回転を設定します。 This defaults to 8.  
          zenscript setRotations(int rotations)  
              zenscript
              setRotations(int rotations)
     
     * Set the block that is placed when the recipe is finished.  
          zenscript setProductState(IItemStack productState)  
              zenscript
              setProductState(IItemStack productState)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### ビルダーの使用例

```zenscript
mods.betterwithmods.Turntable.builder()
.buildRecipe([<minecraft:oak_fence>], [<minecraft:stick>*6])
.build();
```