# ミル

## 基本的なレシピ

* ミルレシピを追加 

```zenscript
mods.betterwithmods.Mill.addRecipe(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Mill.addRecipe([<minecraft:dirt>],[<minecraft:stone>]);
```

## 削除

* 出力に基づいてミルレシピを削除

```zenscript
mods.betterwithmods.Mill.remove(IItemStack[] outputs);
```

* すべてのミルレシピを削除

```zenscript
mods.betterwithmods.Mill.removeAll();
```

## ビルダー

ミルにはレシピビルダーがあり、レシピをより正確に制御することができます。 以前のすべてのメソッドはビルダーの使用に単純に短縮されます。

* 新しいミルビルダーを作成します。 `mods.betterwithmods.Mill.builder()`

* ミルビルダーのメソッド
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * レシピの優先度を設定すると、作成される優先度が低いほど早くなります。 Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priority)
     
     * Set the sound of a Mill Recipe.  
          zenscript setSound(String soundLocation)  
              zenscript
              setSound(String soundLocation)
     
     * Finalize the recipe and add it to the game  
          zenscript build()  
              zenscript
              build()

### ビルダーの使用例

```zenscript
mods.betterwithmods.Mill.builder()
.buildRecipe([<minecraft:stone>], [<minecraft:stone>])
.setGrindType("minecraft:entity.ghast.scream")
.build();
```