# 小孩远端

远地点包用于添加或移除Botania Petal Apothecary的配方。

## 导入包

您可以使用 `mods.botania.Apothecary 调用Apothecary 包`

## 添加配方

您可以使用返回的 [IItemStack](/Vanilla/Items/IItemStack/) 作为输出参数添加配方，或者作为字符串的 Botania 花的名称。 字符串名称仅适用于植物花。  
记住一件事：  
Apothecary 是 **硬代码，只接受小派**所以当您可以添加配方的任何配方时，您只能使用您可以扔进适当配方的项目。

```zenscript
//mods.botania.Apothecary.addRecipe(IItemStack output, IIngredient[…]输入);
mods.botania.Apothecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

/mods. otania.Apothecary.addRecipe(String output, IIngredient[……]input)；
mods.botania.Apothecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## 删除配方

您可以使用返回的 [IItemStack](/Vanilla/Items/IItemStack/) 作为输出参数移除配方，也可以将Botania floer 的名称作为字符串。 字符串名称仅适用于植物花。

```zenscript
//mods.botania.Apothecary.removeRecipe(IItemStack output);
mods.botania.Apothecary.removeRecipe(<minecraft:melon>);

/mods.botania.Apothecary.removeRecipe(String output);
mods.botania.Apothecary.removeRecipe("daybloom");
```