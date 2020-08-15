# Botania Brewing

Brewパッケージは、ボタニア醸造所へのレシピの追加や削除に使用されます。

## 発信中

`mods.botania.Brew` を使用して Brew パッケージを呼び出すことができます。

## 醸造名

このパッケージを使用するには、登録されているボタニアのBrew名を知っている必要があります。  
[/ct botbrews``](/Mods/Modtweaker/Botania/Commands/) を使用してこれらを見つけることができます。

## レシピの追加

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] input, String brewName);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## レシピの削除

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("吸収");
```