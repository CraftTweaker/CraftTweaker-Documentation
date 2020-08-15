# 神经神器

RuneAltar包用于添加或删除配方到或从Botania Rune Altar。

## 导入包

您可以使用 `mods.botania.RuneAltar 调用 RuneAltar 包`

## 查找所有注册的配方

您可以使用 [`/ct botania altar`](/Mods/Modtweaker/Botania/Commands/) 找到所有注册的 Rune Altar 配方。

## 添加配方

```zenscript
//mods.botania.RuneAltar.addRecipe(IItemStack output, IIngredient[……]input, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>[<minecraft:grass>, <minecraft:dirt>], 200);
```

## 删除配方

```zenscript
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```