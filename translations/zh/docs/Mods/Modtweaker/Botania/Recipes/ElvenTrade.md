# Elven 交易

ElvenTrade 包用于将配方添加到或从Botania门户网站移到Alfheim。

## 导入包

您可以使用 `mods.botania.ElvenTrade` 来调用 ElvenTrade 包

## 查找所有注册的配方

您可以找到所有注册的 ElvenTrade 配方使用 [`/ct botania 交易`](/Mods/Modtweaker/Botania/Commands/)。

## 添加配方

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[…]产出, Ingredient[…]输入);
mods.botania.ElvenTrade.addRecipe(formatter)([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## 删除配方

```zenscript
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```