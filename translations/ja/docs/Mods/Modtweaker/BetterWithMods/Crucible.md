# るつぼ可能

## 基本的なレシピ

* unstoked Crucable Recipe を追加する 

```zenscript
mods.betterwithmods.Crucible.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* 貯蔵されたるつぼレシピを追加する 

```zenscript
mods.betterwithmods.Crucible.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examples
mods.betterwithmods.Crucible.addStoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Crucible.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## 削除

* 出力に基づいてるつぼレシピを削除

```zenscript
mods.betterwithmods.Crucible.remove(IItemStack[] outputs);
```

* すべてのるつぼレシピを削除

```zenscript
mods.betterwithmods.Crucible.removeAll();
```

## ビルダー

るつぼにはレシピビルダーがあり、レシピをより正確に制御できます。 以前のすべてのメソッドはビルダーの使用に単純に短縮されます。

* 新しいるつぼビルダーを作成します。 `mods.betterwithmods.Crucible.builder()`

* るつぼの方法
     
     * Sets up the inputs and outputs of the recipe  
          zenscript buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
              zenscript
              buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
     
     * レシピの優先度を設定すると、作成される優先度が低いほど早くなります。 Default=0.  
          zenscript setPriority(int priority)  
              zenscript
              setPriority(int priority)
     
     * レシピの熱要件を設定します。 熱を使用して、レシピをストーズまたはストーズされていないCrucibleで作ることができるかどうかを確認します。 Unstoked heat = 1, Stoked heat = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
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
mods.betterwithmods.Crucible.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```