# 大釜（大釜）

## 基本的なレシピ

* アンステッド大釜レシピを追加する 

```zenscript
mods.betterwithmods.Cauldron.addUnstoked(IIngredient[] inputs, IItemStack[] outputs);
//例
mods.betterwithmods.Cauldron.addUnstoked([<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addUnstoked([<minecraft:dirt>],[<minecraft:grass>]);
```

* 貯蔵大釜レシピを追加する 

```zenscript
mods.betterwithmods.Cauldron.addStoked(IIngredient[] inputs, IItemStack[] outputs);
//Examps.betterwithmods.Cauldron.addStoked([
],[<ore:cobblestone>],[<minecraft:stone>]);
mods.betterwithmods.Cauldron.addStoked([<minecraft:dirt>],[<minecraft:grass>]);
```

## 削除

* 出力に基づいて大釜レシピを削除 ```mods.betterwithmods.Cauldron.remove(IItemStack[] outputs);```

* 全ての大釜レシピを削除 ```mods.betterwithmods.Cauldron.removeAll();```

## ビルダー

大釜にはレシピビルダーがあり、より正確にレシピを制御できます。 以前のすべてのメソッドはビルダーの使用に単純に短縮されます。

* 新しい大釜ビルダーを作成する。 `mods.betterwithmods.Cauldron.builder()`

* 大釜法
    
    * Sets up the inputs and outputs of the recipe  
        buildRecipe(IIngredient[] inputs, IItemStack[] outputs)  
            buildRecipe(IIngredient[] inputs, IItemStack[] outputs)
    
    * レシピの優先度を設定すると、作成される優先度が低いほど早くなります。 Default=0.  
        setPriority(int priority)  
            setPriority(int priority)
    
    * レシピの熱要件を設定します。 熱を使用して、レシピがストオードロンまたはunstoked大釜で作ることができるかどうかを確認します。 Unstoked heat = 1, Stoked heat = 2. You can add custom heat sources, and even custom heat levels using the [Heat Registry](/Mods/Modtweaker/BetterWithMods/HeatRegistry/).  
        setHeat(int heat)  
            setHeat(int heat)
    
    * Set the recipe to ignore the heat value and craft anyways  
        setIgnoreHeat(boolean ignoreHeat)  
            setIgnoreHeat(boolean ignoreHeat)
    
    * Finalize the recipe and add it to the game  
        build()  
            build()

### ビルダーの使用例

```zenscript
mods.betterwithmods.Cauldron.builder()
.buildRecipe([<ore:stone>], [<minecraft:dirt>])
.setHeat(2)
.setPriority(-1)
.build();
```