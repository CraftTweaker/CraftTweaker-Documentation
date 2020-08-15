# かまど

CraftTweaker allows you to `Add` and `Remove` Furnace recipes and change the fuel value of items.

## レシピ

### 削除

かまどのレシピを削除するには2つの方法があります。

```zenscript
furnace.remove(IIngredient出力)
```

そして、

```zenscript
furnace.remove(IIngredient出力, IIngredient入力);
```

The first syntax is more flexible with the recipes that are removed and will remove all Furnace recipes that output the `output` given.  
The second syntax is more strict with the recipes that are removed and will remove all Furnace recipes that output the `output` given and has an input of `input`.

これはゲームに登録されているすべての炉のレシピを削除しますが、炉のレシピを削除する3番目の方法もあります。

```zenscript
furnace.removeAll();
```

### 加算

炉のレシピを追加するには2つのコマンドがあります。

```zenscript
furnace.addRecipe(IItemStack output, IIngredient input);
```

そして、

```zenscript
furnace.addRecipe(IItemStack 出力, IIngredient input, double xp);
```

最初の構文は、製錬時に0xpを与えるかまどのレシピを追加します。

2つ目の構文は、精錬時に `xp` のxpを与えるかまどのレシピを追加します。

## 燃料

### 設定

燃料値を設定するためのコマンドは次のとおりです。

```zenscript
furnace.setFuel(IIngredient input, int burnTime);
```

これは `入力` の書き込み値を `burnTime` にティック単位で設定します。 1600ティック、80秒、8つのアイテムのためのMinecraftの石炭燃焼。 Minecraft炉の中の1つのアイテムは200ティックで完成します。

`burnTime` を `0` に設定すると、 `入力` が燃料項目であることを停止します。

### 取得

アイテムの燃料値を取得するコマンドは次のとおりです。

```zenscript
furnace.getFuel(IItemStack item); 
```

書き込み値を整数として返します

## 使用例

### 削除

`<minecraft:glass>` を出力するすべてのかまどレシピが削除されます。

```zenscript
furnace.remove(<minecraft:glass>);
```

`<minecraft:quartz>` `<minecraft:quartz_ore>` を入力として使用するすべてのかまどレシピを削除します。

```zenscript
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### 加算

`<minecraft:golden_apple>` `<minecraft:apple>` が精錬されたときに出力されるかまどのレシピが追加されます。

```zenscript
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

`<minecraft:speckled_melon>` `<minecraft:melon>` が精錬されると出力されるかまどのレシピが追加され、プレイヤーに1500xpポイントが与えられます。

```zenscript
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500);
```

### 燃料

`<minecraft:rotten_flesh>` の燃料値を `100` に設定します。

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## その他の機能

### 登録済みのかまどレシピをすべて入手する

```zenscript
furnace.all;
```

[`List<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/) を返します。