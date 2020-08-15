# 注入中

此软件包允许您将配方添加到/移除输入框。

## 导入相关包

您可以 [导入](/AdvancedFunctions/Import/) 个软件包及其方法来方便检索这些方法。

```zenscript
导入 mods.thaumcraft.Infution;
```

## 添加配方

```zenscript
//mods.thaumcraft.Infusion.registerRecipe(String name, String research, IItemStack output, int stance, CtapertStack[……]aspect, Igredient centralItem, Ingredient[……]recipe);
mods. haumcraft.Infusion.registerRecipe("testName", "", <minecraft:diamond>, 20, [<aspect:aer>, <aspect:ignis>], <minecraft:grass>, [<minecraft:stick>, <minecraft:dirt>]);
```

## 删除配方

```zenscript
//mods.thaumcraft.Infusion.removeRecipe(String name);
mods.thaumcraft.Infusion.removeRecipe("recipeName");


//mods.thaumcraft.Infusion.removeRecipe(ItemStack output);
mods.thaumcraft.Infusion.removeRecipe(<thaumcraft:mirror_essentia>);
```