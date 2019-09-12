# Botania Brewing

The Brew package is used for adding or removing recipes to/from the Botania Brewing Stand.

## 导入包

You can call the Brew package using `mods.botania.Brew`

## Brew Names

To use this Package, you need to know botania's registered Brew Names.  
You can find them using [`/ct botbrews`](/Mods/Modtweaker/Botania/Commands/).

## 添加配方

```zenscript
//mods.botania.Brew.addRecipe(IIngredient[] input, String brewName);
mods.botania.Brew.addRecipe([<minecraft:nether_wart>, <minecraft:reeds>, <minecraft:redstone>], "speed");
```

## Recipe removal

```zenscript
//mods.botania.Brew.removeRecipe(String brewName);
mods.botania.Brew.removeRecipe("absorption");
```