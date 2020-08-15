# 博塔尼亚酿造公司

Brew 软件包用于添加或从Botania Brewing Stande中移除配方。

## 导入包

You can call the Brew package using `mods.botania.Brew`

## 酿造名称

要使用这个包，您需要知道机器人注册的Brew 名称。  
您可以使用 [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/) 找到他们。

## 添加配方

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[……]input, String brewName);
mods.botania.Brew.addRecipe(for [<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## 删除配方

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("吸收");
```