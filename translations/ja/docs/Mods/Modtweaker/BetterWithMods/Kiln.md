# Kiln

## 基本的なレシピ

* Kilnレシピを追加する - 入力 ** は、それらと関連付けられているブロックを持たなければなりません。

```zenscript
mods.betterwithmods.Kiln.add(IIngredient input, IItemStack[] output);
//Examples
mods.betterwithmods.Kiln.add(<minecraft:fence>,[<minecraft:stick>,<minecraft:stick>]);
```

## 入力による削除

* 入力材料に基づいてレシピを削除

```zenscript
mods.betterwithmods.Kiln.remove(IIngredient input);
```

## 出力による削除

* 出力に基づいてレシピを削除

```zenscript
mods.betterwithmods.Kiln.remove(IItemStack[] outputs);
```

## すべて削除

* すべてのレシピを削除

```zenscript
mods.betterwithmods.Kiln.removeAll();
```

## ビルダー

Kilnにはレシピビルダーがあり、レシピをより正確に制御することができます。 以前のすべてのメソッドはビルダーの使用に単純に短縮されます。

* 新しい Kiln ビルダーを作成する。 `mods.betterwithmods.Kiln.builder()`

* Kilnメソッド
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * レシピの熱要件を設定します。 熱を使用して、レシピがストオードロンまたはunstoked大釜で作ることができるかどうかを確認します。 Unstoked heat = 1, Stoked heat = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
          zenscript setHeat(int heat)  
              zenscript
              setHeat(int heat)
     
     * Set the recipe to ignore the heat value and craft anyways  
          zenscript setIgnoreHeat(boolean ignoreHeat)  
              zenscript
              setIgnoreHeat(boolean ignoreHeat)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### ビルダーの使用例

```zenscript
mods.betterwithmods.Kiln.builder()
.buildRecipe([<ore:iron>], [<minecraft:iron_ingot>*2])
.setHeat(2)
.build();
```

## ストラクチャーブロック

Kilnは、それが作られているブロックに基づいてマルチブロックです。 これにより、構造を作成するために使用できるブロックを登録することができます。

入力は *ブロック*でなければなりません

```zenscript
   mods.betterwithmods.Kiln.registerBlock(IItemStack input);

   mods.betterwithmods.Kiln.registerBlock(<minecraft:stonebrick>);
```